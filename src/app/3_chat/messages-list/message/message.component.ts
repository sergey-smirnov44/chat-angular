import { Component, OnInit, Input} from '@angular/core';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../../store/reducers'
import { FromEntityChannel } from 'src/app/store/actions';
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

  messages$: Observable<Message[]> = this.store.select(fromStore.selectEntityChannel);



  @Input()

  ngOnInit(): void {

  }

  deleteMessage(messageId: string) {
    this.store.dispatch(FromEntityChannel.deleteMessage({ messageId }))
  }
}
