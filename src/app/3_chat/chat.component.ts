import { Component, OnInit, ViewChild } from '@angular/core';
import { clearChat, clearChatSuccess } from 'src/app/store/actions/message.actions';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import * as fromMessage from 'src/app/store/reducers';
import * as fromChannels from 'src/app/store/reducers';
import { Channel } from 'src/app/core/common/3_chat/channelChat.interface';
import { Observable } from 'rxjs';
import { ChatSidebarService } from 'src/app/2_chat-sidebar/chat-sidebar.service';
import { channel } from 'diagnostics_channel';
import { selectAllMessages } from 'src/app/store/reducers/message.reducer';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  nameChannels$: Observable<Channels[]>
  id: any;


  constructor(
    private store: Store<fromMessage.State>,
    private chatService: ChatSidebarService
  ) { }

  ngOnInit(): void {
    this.nameChannels$ = this.store.select(fromChannels.selectAllChannels)
  }

  showChat(id) {
    this.chatService.getShowChat(id)
  }

  deleteAllMessages() {
    this.store.dispatch(clearChat({ ids: [] }))
  }
}
