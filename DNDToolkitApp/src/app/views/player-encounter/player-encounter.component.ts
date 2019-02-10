import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services';
import { SocketSharingService } from 'src/app/services/socket-sharing.service';

@Component({
  selector: 'app-player-encounter',
  templateUrl: './player-encounter.component.html',
  styleUrls: ['./player-encounter.component.css']
})
export class PlayerEncounterComponent implements OnInit {

  constructor(private socketSharingService : SocketSharingService, private socket : SocketService) { }

  ngOnInit() {

    console.log(sessionStorage.getItem('socket'));

    this.socket = JSON.parse(sessionStorage.getItem('socket')) as SocketService;

    this.socket.hello();
    // this.socketSharingService.socketShared$.subscribe(socket => {
    //   this.socket = socket;
    //   console.log(this.socket);
    //   this.socket.hello();
    // })
  }

}
