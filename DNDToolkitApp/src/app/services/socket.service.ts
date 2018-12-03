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

  onInvite() : Observable<any> {
    return 
  }
}
