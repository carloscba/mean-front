import { Injectable } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SocketService {
  private socket;
  private SERVER_URL = 'https://mean-back.herokuapp.com';
  constructor() { }
  
  public initSocket(): void {
    this.socket = socketIo(this.SERVER_URL);
  }

  public newData(data: any): void {
    this.socket.emit('newData', data);
  }

  public onNewData(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('newData', (data: any) => observer.next(data));
    });
  }

  public onEvent(event): Observable<any> {
    return new Observable(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

}
