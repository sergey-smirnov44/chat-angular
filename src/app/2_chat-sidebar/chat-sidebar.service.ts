import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Channels} from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatSidebarService{

  baseUrl = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}

  // public getAll(): Observable<Message[]> {
  //    return this.http.get<Message[]>('/assets/data.json')
  //  }

  public getChannels(): Observable<Channels[]> {
    return this.http.get<Channels[]>(this.baseUrl + 'channels')
  }
}
