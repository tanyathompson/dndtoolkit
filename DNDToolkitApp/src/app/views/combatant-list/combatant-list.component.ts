import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-combatant-list',
  templateUrl: './combatant-list.component.html',
  styleUrls: ['./combatant-list.component.scss']
})

export class CombatantListComponent implements OnInit {
  combatants;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.combatants = this.route.snapshot.data.combatantList.body;
  }

}
