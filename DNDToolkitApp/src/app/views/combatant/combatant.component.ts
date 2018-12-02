import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CombatantModel } from '../../models';
import { API } from '../../services';

@Component({
  selector: 'app-combatant',
  templateUrl: './combatant.component.html',
  styleUrls: ['./combatant.component.scss']
})
export class CombatantComponent implements OnInit {
  combatantList : CombatantModel[];
  newCombatantForm : FormGroup;
  deleteCombatantForm : FormGroup;
  updateCombatantForm : FormGroup;

  constructor(private route: ActivatedRoute, private api: API) { }

  ngOnInit() {
    //get list of combatants from activated route
    this.combatantList = this.route.snapshot.data.combatantList.body;

    //setup form for adding new Combatants
    this.newCombatantForm = new FormGroup({
      name: new FormControl(''),
      owner: new FormControl(''),
      hp: new FormControl(''),
      initiative: new FormControl('')
    });

    this.deleteCombatantForm = new FormGroup({
      id: new FormControl('')
    });

    this.updateCombatantForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      owner: new FormControl(''),
      hp: new FormControl(''),
      initiative: new FormControl('')
    })
  }

  addNewCombatant() {
    console.log(this.newCombatantForm)

    let combatant : CombatantModel = {
      _id: null,
      name: this.newCombatantForm.controls.name.value,
      owner: this.newCombatantForm.controls.owner.value,
      hp: this.newCombatantForm.controls.hp.value,
      initiative: this.newCombatantForm.controls.initiative.value,
    }

    this.api.addNewCombatant(combatant).subscribe(combatant => this.combatantList.push(combatant));
  }

  deleteCombatant() {
    this.api.deleteCombatant(this.deleteCombatantForm.controls.id.value).subscribe(combatant => this.combatantList.splice(this.combatantList.indexOf(combatant),1));
  }

  updateCombatant() {
    let id : String = this.updateCombatantForm.controls.id.value;

    let newCombatant : CombatantModel = {
      _id: id,
      name: this.updateCombatantForm.controls.name.value,
      owner: this.updateCombatantForm.controls.owner.value,
      hp: this.updateCombatantForm.controls.hp.value,
      initiative: this.updateCombatantForm.controls.initiative.value,
    }
    this.api.updateCombatant(id, newCombatant).subscribe(oldCombatant => {
      this.combatantList.splice(this.combatantList.indexOf(oldCombatant), 1);
      this.combatantList.push(newCombatant);
    });

  }


}
