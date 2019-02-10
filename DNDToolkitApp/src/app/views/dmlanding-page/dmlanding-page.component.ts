import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { SocketService } from 'src/app/services';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { PlayerModel, MonsterModel, MonsterGroupModel } from 'src/app/models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dmlanding-page',
  templateUrl: './dmlanding-page.component.html',
  styleUrls: ['./dmlanding-page.component.css']
})

export class DMLandingPageComponent implements OnInit {
  subscriptions : Subscription[] = [];
  addMonsterForm : FormGroup;
  room : String;
  players : PlayerModel[] = [];
  monsters : MonsterModel[];
  monsterGroups : MonsterGroupModel[]; 
  inCombat : Boolean = false;
  addNewMonster : Boolean = false;

  constructor(
    private socket : SocketService, 
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.room = sessionStorage.getItem('room');
    if (this.room === null) {
      this.room = this.route.snapshot.data.room;
      sessionStorage.setItem('room', this.room.toString());
    }

    this.monsterGroups = JSON.parse(sessionStorage.getItem('monsterGroups'));
    this.monsters = JSON.parse(sessionStorage.getItem('monsters'));
    if (this.monsterGroups === null) { this.monsterGroups = []; }
    if (this.monsters === null) { this.monsters = []; }

    this.socket.connect(this.room);

    this.subscriptions.push(this.socket.onPlayerConnect().subscribe(player => {
      this.players.push(player);
      sessionStorage.setItem('players', JSON.stringify(this.players));
    }));

    this.addMonsterForm = new FormGroup({
      monsterName: new FormControl(''),
      initiativeBonus: new FormControl(''),
      currentHitPoints: new FormControl(''),
      maximumHitPoints: new FormControl(''),
      quantity: new FormControl('')
    });
  }

  addMonster() {
    let quantity = this.addMonsterForm.controls.quantity.value;
    if (quantity > 1) {
      let monsterGroupName = "Group of " + this.addMonsterForm.controls.monsterName.value + "s (" + quantity + ")";
      let monsterGroupInitiativeBonus = this.addMonsterForm.controls.initiativeBonus.value;

      let monsterGroup = new MonsterGroupModel(Date.now(), quantity, monsterGroupName, monsterGroupInitiativeBonus);
  
      for(let i = 0; i < quantity; i++) 
      {
        let monster = new MonsterModel();
        monster.id = i.toString();
        monster.combatantName = this.addMonsterForm.controls.monsterName.value;
        monster.initiativeBonus = monsterGroupInitiativeBonus;
        monster.currentHitPoints = this.addMonsterForm.controls.currentHitPoints.value;
        monster.maximumHitPoints = this.addMonsterForm.controls.maximumHitPoints.value;
        monsterGroup.addMonster(monster);
      }
  
      this.monsterGroups.push(monsterGroup);
      sessionStorage.setItem('monsterGroups', JSON.stringify(this.monsterGroups));
    } else {
      let monster = new MonsterModel();
      monster.id = Date.now().toString();
      monster.combatantName = this.addMonsterForm.controls.monsterName.value;
      monster.initiativeBonus = this.addMonsterForm.controls.initiativeBonus.value;
      monster.currentHitPoints = this.addMonsterForm.controls.currentHitPoints.value;
      monster.maximumHitPoints = this.addMonsterForm.controls.maximumHitPoints.value;
      this.monsters.push(monster);
      sessionStorage.setItem('monsters', JSON.stringify(this.monsters));
    }
    
    this.addNewMonster = false;
  }

  showAddMonsterForm() {
    this.addNewMonster = true;
  }

  beginCombat() {
    this.socket.beginCombat();
    this.router.navigate(['dm/encounter'])
  }


  ngOnDestroy() {
    //sessionStorage.removeItem('players');
    this.socket.disconnect();
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });
  }

}
