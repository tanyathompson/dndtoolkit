import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EncounterModel } from '../../models';
import { API } from '../../services';

@Component({
  selector: 'app-new-encounter',
  templateUrl: './new-encounter.component.html',
  styleUrls: ['./new-encounter.component.scss']
})
export class NewEncounterComponent implements OnInit {
  newEncounterForm;

  constructor(private api: API) { }

  ngOnInit() {
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
    this.api.addNewEncounter(encounter).subscribe();
  }
}
