import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocketService } from '../../services';

@Component({
  selector: 'app-player-initiative',
  templateUrl: './player-initiative.component.html',
  styleUrls: ['./player-initiative.component.scss']
})
export class PlayerInitiativeComponent implements OnInit {

  id : String;
  socket : SocketService = new SocketService();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })

    console.log('Calling connectPlayer with id: ' + this.id)
    this.socket.connectPlayer(this.id);
  }

}
