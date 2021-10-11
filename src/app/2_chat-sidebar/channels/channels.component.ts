import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Store } from '@ngrx/store';
import * as fromChannels from '../../store/actions/channels.actions'
import * as fromStore from '../../store/reducers'
import { ChatSidebarService } from 'src/app/2_chat-sidebar/chat-sidebar.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  constructor(private store: Store<fromStore.State>,
              private chatService: ChatSidebarService
  ) { }

  channels$: Observable<Channels[]> = this.store.select(fromStore.selectAllChannels)

  showChat(id) {
    this.chatService.getShowChat(id)
  }

  ngOnInit(): void {
    this.store.dispatch(fromChannels.loadChannels())
  }


}
