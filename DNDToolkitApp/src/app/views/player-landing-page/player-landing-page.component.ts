import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpService, SocketService } from '../../services';
import { Subscription } from 'rxjs';
import { PlayerModel } from 'src/app/models';
import { Router } from '@angular/router';
import { SocketSharingService } from 'src/app/services/socket-sharing.service';

@Component({
  selector: 'app-player-landing-page',
  templateUrl: './player-landing-page.component.html',
  styleUrls: ['./player-landing-page.component.css']
})

export class PlayerLandingPageComponent implements OnInit {

  subscriptions : Subscription[] = [];
  playerDataForm : FormGroup;
  connectToDMForm : FormGroup;
  me : PlayerModel;
  id : String = Date.now().toString();
  connectedToDM : Boolean = false;
  playerDataCollected : Boolean = false;

  constructor(
    private socketSharingService : SocketSharingService,
    private socket : SocketService,
    private router : Router) { }

  ngOnInit() {
    this.me = new PlayerModel();

    if (sessionStorage.getItem('player') !== null) {
      this.me = JSON.parse(sessionStorage.getItem('player'));
      this.playerDataCollected = true;
    }

    this.playerDataForm = new FormGroup({
      playerName: new FormControl(''),
      characterName: new FormControl(''),
      initiativeBonus: new FormControl(''),
      currentHitPoints: new FormControl(''),
      maximumHitPoints: new FormControl('')
    });
    this.connectToDMForm = new FormGroup({
      room: new FormControl('')
    })
  }

  connect() {
    this.socket.connect(this.connectToDMForm.controls.room.value);
    sessionStorage.setItem('room', this.connectToDMForm.controls.room.value.toString());

    sessionStorage.setItem('socket', JSON.stringify(this.socket));

    this.socket.playerConnected(this.me);
    this.connectedToDM = true;

    this.subscriptions.push(this.socket.onCombatBegin().subscribe(() => {
      this.router.navigate(['player/encounter']);
      setTimeout(() => {
        this.socketSharingService.shareSocket(this.socket);
      }, 1000);
    }));
  }

  updateMe() {
    this.playerDataCollected = true;

    this.me.id = this.id;
    this.me.combatantName = this.playerDataForm.controls.characterName.value;
    this.me.playerName = this.playerDataForm.controls.playerName.value;
    this.me.initiativeBonus = this.playerDataForm.controls.initiativeBonus.value;
    this.me.currentHitPoints = this.playerDataForm.controls.currentHitPoints.value;
    this.me.maximumHitPoints = this.playerDataForm.controls.maximumHitPoints.value;
    
    console.log(this.me);
    sessionStorage.setItem('player',JSON.stringify(this.me));
  }

  editPlayerInfo() {
    this.playerDataCollected = false;
  }

  ngOnDestroy() {
    this.socket.disconnect();
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });
  }

}
