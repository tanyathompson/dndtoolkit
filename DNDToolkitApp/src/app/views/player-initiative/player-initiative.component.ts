import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-initiative',
  templateUrl: './player-initiative.component.html',
  styleUrls: ['./player-initiative.component.scss']
})
export class PlayerInitiativeComponent implements OnInit {

  id : String;
  socket : SocketService = new SocketService();
  dmWantsMe : Boolean = false;
  dmsCurrentRoom : String;

  onCallingPlayersSubscription : Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    console.log('Calling connectPlayer with id: ' + this.id)
    this.socket.connectPlayer(this.id);

    this.onCallingPlayersSubscription = this.socket.onCallingPlayers().subscribe(data => {
      if (this.id === data.id) { 
        this.dmWantsMe = true; 
        console.log('a DM wants me for room ' + data.room);
        this.dmsCurrentRoom = data.room;
      }
    });

    this.socket.onRollInitiative().subscribe(() => {
      console.log('need to roll initiative!');
    });
  }

  joinRoom() {
    this.socket.joinRoom(this.dmsCurrentRoom, this.id);
    this.onCallingPlayersSubscription.unsubscribe();
  }

}
