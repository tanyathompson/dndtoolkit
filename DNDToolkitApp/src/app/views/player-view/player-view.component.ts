import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService, SocketService } from '../../services';
import { Subscription } from 'rxjs';
import { PlayerModel } from 'src/app/models';

@Component({
  selector: 'app-player-view',
  templateUrl: './player-view.component.html',
  styleUrls: ['./player-view.component.css']
})
export class PlayerViewComponent implements OnInit {

  subscriptions : Subscription[] = [];
  playerDataForm : FormGroup;
  connectToDMForm : FormGroup;
  me : PlayerModel;
  id : String = Date.now().toString();
  connectedToDM : Boolean = false;

  constructor(private http : HttpService, private socket : SocketService) { }

  ngOnInit() {
    this.me = new PlayerModel();

    this.playerDataForm = new FormGroup({
      name: new FormControl(''),
      characterName: new FormControl(''),
      initiativeBonus: new FormControl(''),
      currentHitPoints: new FormControl(''),
      maximumHitPoints: new FormControl('')
    });

    this.connectToDMForm = new FormGroup({
      room: new FormControl('')
    })

    this.subscriptions.push(this.socket.onInvite().subscribe( () => {
      this.connectedToDM = true;
    }))
  }

  connect() {
    this.socket.connect(this.connectToDMForm.controls.room.value);
    this.connectedToDM = true;
  }

  updateMe() {
    this.me.id = this.id;
    this.me.name = this.playerDataForm.controls.name.value;
    this.me.characterName = this.playerDataForm.controls.characterName.value;
    this.me.initiativeBonus = this.playerDataForm.controls.initiativeBonus.value;
    this.me.currentHitPoints = this.playerDataForm.controls.currentHitPoints.value;
    this.me.maximumHitPoints = this.playerDataForm.controls.maximumHitPoints.value;
    
    console.log(this.me);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });
  }

}
