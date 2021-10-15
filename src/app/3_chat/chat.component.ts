import { Component, OnInit, ViewChild } from '@angular/core';
// import { clearChat, clearChatSuccess } from 'src/app/store/actions/message.actions';
import { Store } from '@ngrx/store';
import * as fromMessage from 'src/app/store/reducers';
import { Observable, Subscription, switchMap } from 'rxjs';
import { ChatSidebarService } from 'src/app/core/services/chat-sidebar.service';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { EntityChannel } from 'src/app/core/common/2_chat-sidebar/entityChannel.interface';
import * as fromStore from 'src/app/store/reducers';
import { ChannelService } from 'src/app/core/services/channel.service';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import * as fromEntityChannel from 'src/app/store/actions/entityChannel.actions';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  nameChannel$: Observable<Message[]> = this.store.select(fromStore.selectEntityChannel)

  constructor(
    private store: Store<fromMessage.State>,
    private chatService: ChannelService,
    private ac: ActivatedRoute,
    private router: Router
  ) {

    console.log(this.nameChannel$, 'nameChannel')
    console.log(this.ac.snapshot, 1289)
  }
  get id(): string  { return this.ac.snapshot.params['id']}
  name$: Observable<string> = this.store.select(fromStore.getNameChannel)

  ngOnInit(): void {
    this.store.dispatch(fromEntityChannel.getEntityChannel({ id: this.id }))
  }

  deleteAllMessages() {
    this.store.dispatch(fromEntityChannel.clearChat({ ids: [] }))
  }
}

