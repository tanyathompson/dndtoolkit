import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketService, HttpService } from 'src/app/services';
import { Subscription } from 'rxjs';
import { CombatantModel } from 'src/app/models';
import { ComponentFactoryBoundToModule } from '@angular/core/src/linker/component_factory_resolver';

@Component({
  selector: 'app-dmview',
  templateUrl: './dmview.component.html',
  styleUrls: ['./dmview.component.css']
})
export class DMViewComponent implements OnInit, OnDestroy {

  subscriptions : Subscription[] = [];
  room : String = "dummy";
  combatants : CombatantModel[] = []; 

  constructor(private http : HttpService, private socket : SocketService) { }

  ngOnInit() {
    this.socket.connect(this.room);

    // this.subscriptions.push(this.http.getSimplePassword().subscribe(room => {
    //   this.room = room;
    // }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });
  }

}
