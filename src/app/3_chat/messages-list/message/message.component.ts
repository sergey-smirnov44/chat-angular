import { Component, OnInit, Input, HostListener, ViewChild } from '@angular/core';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { Store } from '@ngrx/store';
import MessageJson from 'server/data.json'
import { Observable } from 'rxjs';
import * as fromStore from '../../../store/reducers'
import { MessageService } from 'src/app/3_chat/messages-list/message/message.service';
import { FromMessage } from 'src/app/store/actions';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) {}

// messages = MessageJson as Message[]

  messages$: Observable<Message[]> = this.store.select(fromStore.selectAllMessages);
  selectId: any;
  ids: any

  @Input()

  ngOnInit(): void {
    this.store.dispatch(FromMessage.loadMessage());
  }

  deleteMessage(messageId: string) {
   this.store.dispatch(FromMessage.deleteMessage({ messageId }))
  }


}
