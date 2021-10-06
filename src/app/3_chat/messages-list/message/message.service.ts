import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Message} from 'src/app/core/common/3_chat/messageChat.interface';
import { Observable } from 'rxjs';
import { FromMessage } from 'src/app/store/actions';

@Injectable({
  providedIn: 'root'
})
export class MessageService{

  public newMessage: Message = {
    id: 123,
    photo: 'https://art.pixilart.com/8a47f5d9039d919.gif',
    name: 'Sergey',
    text: 213,
    time: 'Today',
    date: 'Today'
  }

  constructor(private http: HttpClient) {}

 public getAll(): Observable<Message[]> {
    return this.http.get<Message[]>('/assets/data.json' )
  }

  public sendMessage(newMessage: Message): Observable<Message> {
  // const newMessage: Message = {
  //     id: 123,
  //     photo: 'https://art.pixilart.com/8a47f5d9039d919.gif',
  //     name: 'Sergey',
  //     text: e.target.value,
  //     time: 'Today',
  //     date: 'Today'
  //   }
    return this.http.post<Message>('/assets/data.json/', newMessage)
  }

// public deleteMessage(id: string) {
//     return this.http.delete('/assets/data.json/' + id)
// }



}
