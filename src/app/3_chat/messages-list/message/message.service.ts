import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Message} from 'src/app/core/common/3_chat/messageChat.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService{

   baseUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}

 // public getAll(): Observable<Message[]> {
 //    return this.http.get<Message[]>('/assets/data.json')
 //  }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl + 'users')
  }
}
