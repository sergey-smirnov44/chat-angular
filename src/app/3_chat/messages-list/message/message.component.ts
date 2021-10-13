import { Component, OnInit, Input} from '@angular/core';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store/reducers'
import { FromMessage } from 'src/app/store/actions';
import { ChatSidebarService } from 'src/app/core/services/chat-sidebar.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {


  constructor(
    private store: Store<fromStore.State>,
    private chatService: ChatSidebarService
  ) {

  }
messages$: null
  // messages$: Observable<Message[]> = this.store.select(fromStore.selectAllMessages);

  ids: any

  @Input()

  ngOnInit(): void {
    // this.store.dispatch(FromMessage.loadMessage());
    // console.log(this.messages$)
  }

  deleteMessage(messageId: string) {
    this.store.dispatch(FromMessage.deleteMessage({ messageId }))
  }

  // showChat(id) {
  //   this.chatService.getShowChat(id)
  // }

}
