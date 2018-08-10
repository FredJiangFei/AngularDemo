import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/observable/dom/webSocket';

@Injectable()
export class WebSocketService {

  ws: WebSocket;

  constructor() { }


  create(url: string): Observable<any> {
    this.ws = new WebSocket(url);

    return new Observable(
      observer => {
        this.ws.onmessage = (e) => observer.next(e.data);
        this.ws.onerror = (e) => observer.error(e);
        this.ws.onclose = (e) => observer.complete();
      }
    );
  }

  send(message: string) {
    this.ws.send(message);
  }
}
