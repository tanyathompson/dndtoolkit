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
  }

  addNewEncounter() {
    console.log(this.newEncounterForm)

    let rawCombatants = this.newEncounterForm.controls.combatants.value;
    let combatantList = rawCombatants.split(',');

    let encounter : EncounterModel = {
      name: this.newEncounterForm.controls.name.value,
      combatants: combatantList
    }
    this.api.addNewEncounter(encounter).subscribe(encounter => this.encounterList.push(encounter));
  }
}
