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

  public getFriendsList(): Observable<Friends[]> {
    return this.http.get<Friends[]>(this.baseUrl + 'users/')
  }

  public getFriendsById(id): Observable<Friends[]> {
    return this.http.get<Friends[]>(this.baseUrl + 'users/' + id)
  }

  public deleteFriendsById(id): Observable<Friends[]> {
    return this.http.put<Friends[]>(this.baseUrl + 'users/' + id, { friend: 'false' })
  }

  public addFriendsById(id): Observable<Friends[]> {
    return this.http.put<Friends[]>(this.baseUrl + 'users/' + id, { friend: 'true' })
  }
}
