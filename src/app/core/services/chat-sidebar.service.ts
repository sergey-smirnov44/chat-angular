import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Observable, take } from 'rxjs';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';
import { Store } from '@ngrx/store';
import * as fromMessage from 'src/app/store/reducers'
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { log } from 'util';


@Injectable({
  providedIn: 'root'
})
export class ChatSidebarService {

  baseUrl = 'http://localhost:3000/'

  constructor(
    private store: Store<fromMessage.State>,
    private http: HttpClient
  ) {}

  public getChannels(): Observable<Channels[]> {
    return this.http.get<Channels[]>(this.baseUrl + 'channels')
  }

  public getFriendsList(): Observable<Friends[]> {
    return this.http.get<Friends[]>(this.baseUrl + 'users/')
  }

  public getFriendsById(id): Observable<Friends[]> {
    return this.http.get<Friends[]>(this.baseUrl + 'users/' + id)
  }



  //
  // public getShowChat(id){
  //   let message: Message = null
  //   this.store.select(fromMessage.selectAllMessages).subscribe(mes => {
  //     return message = mes[id - 1]
  //   })
  //   console.log(message)
  //   // @Input message
  // }
}
