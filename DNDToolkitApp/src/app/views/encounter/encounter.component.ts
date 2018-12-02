import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EncounterModel, CombatantModel } from '../../models';
import { API } from '../../services';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {
  newEncounterForm : FormGroup;
  deleteEncounterForm : FormGroup;
  updateEncounterForm : FormGroup;
  encounterList : any;

  constructor(private route: ActivatedRoute, private api: API) { }

  ngOnInit() {
    //populate list of encounters
    this.encounterList = this.route.snapshot.data.encounterList.body;

    this.encounterList.forEach(encounter => {
      let tempPrettyCombatants = [];
      encounter.combatants.forEach(encounterCombatant => {
        this.route.snapshot.data.combatantList.body.forEach(combatant => {
          if (encounterCombatant == combatant._id) {
            tempPrettyCombatants.push(combatant.name);
          }
        })
      })
      encounter.prettyCombatants = tempPrettyCombatants;
    });

    //setup form for addition of encounters
    this.newEncounterForm = new FormGroup({
      name: new FormControl(''),
      combatants: new FormControl('')
    });

    this.deleteEncounterForm = new FormGroup({
      id: new FormControl('')
    });

    this.updateEncounterForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      combatants: new FormControl('')
    });

  }

  addNewEncounter() {
    console.log(this.newEncounterForm)

    let rawCombatants = this.newEncounterForm.controls.combatants.value;
    let combatantList = rawCombatants.split(',');

    let encounter : EncounterModel = {
      _id: null,
      name: this.newEncounterForm.controls.name.value,
      combatants: combatantList
    }
    this.api.addNewEncounter(encounter).subscribe(encounter => this.encounterList.push(encounter));
  }

  deleteEncounter() {
    this.api.deleteEncounter(this.deleteEncounterForm.controls.id.value).subscribe(encounter => this.encounterList.splice(this.encounterList.indexOf(encounter),1));
  }

  updateEncounter() {
    let id : String = this.updateEncounterForm.controls.id.value;

    let newEncounter : EncounterModel = {
      _id: id,
      name: this.updateEncounterForm.controls.name.value,
      combatants: this.updateEncounterForm.controls.combatants.value.split(',')
    }
    console.log(newEncounter);

    this.api.updateEncounter(id, newEncounter).subscribe(oldEncounter => {
      this.encounterList.splice(this.encounterList.indexOf(oldEncounter),1);
      this.encounterList.push(newEncounter);
    });

  }

}
