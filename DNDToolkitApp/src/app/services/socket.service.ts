import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;

  constructor() { }

  connectDM(id) {
    this.socket = io(environment.controller_url);
    //this.socket.emit('newRoom', id);
  }

  connectPlayer(id) {
    this.socket = io(environment.controller_url);
    this.socket.emit('newPlayer', id);
  }

  public onPlayerConnect(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('playerConnected', (playerId: String) => observer.next(playerId));
    });
  }

}
