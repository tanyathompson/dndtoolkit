import { Component, OnInit } from '@angular/core';
import { EncounterModel, CombatantModel } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../../services';

@Component({
  selector: 'app-dm-initiative',
  templateUrl: './dm-initiative.component.html',
  styleUrls: ['./dm-initiative.component.scss']
})
export class DmInitiativeComponent implements OnInit {

  encounter : EncounterModel;
  socket : SocketService = new SocketService();
  combatants : {
    id: String,
    name: String,
    connected: Boolean,
    myTurn: Boolean;
  }[];
  allPlayersConnected : Boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.encounter = this.route.snapshot.data.encounter.body;
    this.combatants = [];

    this.encounter.combatants.forEach(element => {
      this.combatants.push({
        id: element,
        name: 'Unknown',
        myTurn: false,
        connected: false
      })
    });
    
    this.socket.connectDM(this.encounter._id, this.combatants);

    this.socket.onPlayerConnect().subscribe(playerId => {
      console.log('player connected: ' + playerId)
      this.combatants.forEach(element => {
        if (element.id === playerId) { element.connected = true };
      });
      this.updateConnectionStatus();
    });

    this.socket.onRollInitiative().subscribe( () => {
      console.log('need to roll initiative!');
    });
  }

  updateConnectionStatus() {
    let status = true;
    this.combatants.forEach(element => {
      if (!element.connected) { status = false; }
    });
    this.allPlayersConnected = status;
  }

  rollInitiative() {
    this.socket.rollInitiative();
  }

}
