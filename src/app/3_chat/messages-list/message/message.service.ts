import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Message} from 'src/app/core/common/3_chat/messageChat.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService{

  // private url = 'https://github.com/sergey-smirnov44/chat-angular/blob/master/src/assets/data.json'

  constructor(private http: HttpClient) {}

 public getAll(): Observable<Message> {
    return this.http.get<Message>('/assets/data.json')
  }
}
