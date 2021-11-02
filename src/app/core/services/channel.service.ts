import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Observable } from 'rxjs';
import { EntityChannel } from 'src/app/core/common/2_chat-sidebar/entityChannel.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  baseUrl = 'https://console.firebase.google.com/project/chat-angular-6dfe6/firestore/data/~2F'

  constructor( private http: HttpClient, private fb: AngularFirestore ) {}

  public getChannels(): Observable<Channels[]> {
    return this.http.get<Channels[]>(this.baseUrl + 'channels')
  }


  public getChannelsByID(id): Observable<EntityChannel> {
    return this.http.get<EntityChannel>(this.baseUrl + 'channels/' + id)

  }
}
