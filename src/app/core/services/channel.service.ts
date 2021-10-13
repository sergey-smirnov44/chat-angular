import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Observable, take } from 'rxjs';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';
import { Store } from '@ngrx/store';
import * as fromMessage from 'src/app/store/reducers'
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { log } from 'util';
import { EntityChannel } from 'src/app/core/common/2_chat-sidebar/entityChannel.interface';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  baseUrl = 'http://localhost:3000/'

  constructor(
    private store: Store<fromMessage.State>,
    private http: HttpClient
  ) {}

  public getChannels(): Observable<Channels[]> {
    return this.http.get<Channels[]>(this.baseUrl + 'channels')
  }

  public getChannelsByID(id, params: any): Observable<EntityChannel[]> {
    return this.http.get<EntityChannel[]>(this.baseUrl + 'channels/' + id)
  }




}
