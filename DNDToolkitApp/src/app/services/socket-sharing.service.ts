import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class SocketSharingService {

  private sharedSocket = new Subject<SocketService>();

  socketShared$ = this.sharedSocket.asObservable();

  shareSocket(socket : SocketService) {
    this.sharedSocket.next(socket);
  }
}
