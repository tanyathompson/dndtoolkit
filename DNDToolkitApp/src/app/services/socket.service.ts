import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;

  constructor() { }

  connect(room) {
    this.socket = io(environment.controller_url, {query: 'room=' + room});
  }

  hello() {
    this.socket.emit('hello');
  }

  playerConnected(player) {
    this.socket.emit('playerConnected', player)
  }

  beginCombat() {
    this.socket.emit('beginCombat');
  }

  endTurn(id) {
    this.socket.emit('endTurn', id);
  }

  disconnect() {
    this.socket.emit('disconnect');
  }
  
  onEndTurn() : Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('endTurn', id => {
        observer.next(id);
      });
    });
  }

  onCombatBegin() : Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('beginCombat', () => {
        observer.next();
      });
    });
  }

  onPlayerConnect() : Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('playerConnected', (player : any) => {
        observer.next(player);
      });
    });
  }
}
