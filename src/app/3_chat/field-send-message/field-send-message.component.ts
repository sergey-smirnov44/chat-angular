import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Store } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import * as fromStore from '../../store/reducers'
import { FromEntityChannel } from 'src/app/store/actions';

@Component({
  selector: 'app-field-send-message',
  templateUrl: './field-send-message.component.html',
  styleUrls: ['./field-send-message.component.scss']
})
export class FieldSendMessageComponent implements OnInit {
  constructor(private store: Store<fromStore.State>) {
  }

  public fieldInput = '';
  public isEmojiPickerVisible: boolean;

  public addEmoji(event) {

    this.fieldInput = `${ this.fieldInput }${ event.emoji.native }`;
  }

  sendText() {
    if (this.fieldInput) {
      const newMessage: Message = {
        id: Guid.create().toString(),
        photo: 'https://art.pixilart.com/8a47f5d9039d919.gif',
        name: 'Sergey',
        text: this.fieldInput,
        // time: Date.now,
        date: new Date().toISOString()
      }
      console.log(newMessage)


      this.store.dispatch(FromEntityChannel.sendMessage({ message: newMessage }))
      this.isEmojiPickerVisible = false
      this.fieldInput = ''
    }
  }

  ngOnInit(): void {

  }


}
