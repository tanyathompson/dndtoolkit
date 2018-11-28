import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncounterModel, CombatantModel } from '../../models'

@Component({
  selector: 'app-encounter-list',
  templateUrl: './encounter-list.component.html',
  styleUrls: ['./encounter-list.component.scss']
})
export class EncounterListComponent implements OnInit {
  encounters;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.encounters = this.route.snapshot.data.encounterList.body;

    this.encounters.forEach(encounter => {
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
  }
  
}
