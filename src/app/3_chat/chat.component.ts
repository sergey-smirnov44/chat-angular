import { Component, OnInit, ViewChild } from '@angular/core';
import { clearChat, clearChatSuccess } from 'src/app/store/actions/message.actions';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  constructor(private store: Store<Message>) { }

  ngOnInit(): void {
  }

  deleteAllMessages() {
    const deleteAllMessages = this.store.dispatch(clearChat({ ids: [] }))
    // @ts-ignore
    if (!deleteAllMessages) {
      this.store.dispatch(clearChatSuccess())
    }

  }
}
