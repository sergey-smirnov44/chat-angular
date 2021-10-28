import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Observable } from 'rxjs';
import { EntityChannel } from 'src/app/core/common/2_chat-sidebar/entityChannel.interface';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  baseUrl = 'http://localhost:3000/'

  constructor( private http: HttpClient ) {}

  public getChannels(): Observable<Channels[]> {
    return this.http.get<Channels[]>(this.baseUrl + 'channels')
  }

  public getChannelsByID(id): Observable<EntityChannel> {
    return this.http.get<EntityChannel>(this.baseUrl + 'channels/' + id)

  }
}
