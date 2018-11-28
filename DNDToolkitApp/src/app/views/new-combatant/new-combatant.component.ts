import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CombatantModel } from '../../models';
import { API } from '../../services';

@Component({
  selector: 'app-new-combatant',
  templateUrl: './new-combatant.component.html',
  styleUrls: ['./new-combatant.component.scss']
})
export class NewCombatantComponent implements OnInit {

  newCombatantForm;

  constructor(private api: API) { }

  ngOnInit() {
    this.newCombatantForm = new FormGroup({
      name: new FormControl(''),
      owner: new FormControl(''),
      hp: new FormControl(''),
      initiative: new FormControl('')
    });
  }

  addNewCombatant() {
    console.log(this.newCombatantForm)

    let combatant : CombatantModel = {
      name: this.newCombatantForm.controls.name.value,
      owner: this.newCombatantForm.controls.owner.value,
      hp: this.newCombatantForm.controls.hp.value,
      initiative: this.newCombatantForm.controls.initiative.value,
    }

    this.api.addNewCombatant(combatant).subscribe();
  }

}
