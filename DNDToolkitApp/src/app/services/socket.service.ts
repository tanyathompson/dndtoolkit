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

  connectDM(id, combatants) {
    this.socket = io(environment.controller_url, {query: 'room=' + id});
    this.socket.emit('encounterStarting', {
      room: id,
      participants: combatants
    })
  }

  connectPlayer(id) {
    //this.socket = io(environment.controller_url, {query: 'room=' + room});
    this.socket = io(environment.controller_url);
    this.socket.emit('newPlayer', id);
  }

  joinRoom(room, id) {
    this.socket.emit('joinRoom', room, id);
  }

  rollInitiative() {
    this.socket.emit('rollInitiative');
  }

  public onRollInitiative(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('rollInitiative', () => observer.next());
    });
  }

  public onPlayerConnect(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('playerConnected', (playerId: String) => observer.next(playerId));
    });
  }

  public onCallingPlayers(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('callingPlayers', (data : Object) => observer.next(data));
    })
  }

}
