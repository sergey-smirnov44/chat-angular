import { Component, Input, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Store } from '@ngrx/store';
import { FromMessage } from 'src/app/store/actions';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import * as fromStore from '../../store/reducers'
import { sendMessage } from 'src/app/store/actions/message.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-field-send-message',
  templateUrl: './field-send-message.component.html',
  styleUrls: ['./field-send-message.component.scss']
})
export class FieldSendMessageComponent implements OnInit {
  public id: Guid;
  constructor(private store: Store<fromStore.State>) {
    this.id = Guid.create() // используй Guid для id сообщений
  }

  public fieldInput = '';
  public isEmojiPickerVisible: boolean;


 public message: Message = {
    id: 123,
    photo: 'https://art.pixilart.com/8a47f5d9039d919.gif',
    name: 'Sergey',
    text: this.fieldInput,
    time: '5:31 AM',
    date: 'Today'
  }



  public addEmoji(event) {

    this.fieldInput = `${ this.fieldInput }${ event.emoji.native }`;
  }

  sendText(message: Message) {
    const newMessage = {
      // id: this.id,
      photo: 'https://art.pixilart.com/8a47f5d9039d919.gif',
      name: 'Sergey',
      text: this.fieldInput,
      time: Date.now,
      date: 'Today'
    }
    console.log(newMessage)


    this.store.dispatch(sendMessage({ message }))
    this.isEmojiPickerVisible = false
    this.fieldInput = ''
      // this.store.dispatch(FromMessage.loadMessage());
      // }
    // console.log(this.message: newMessage)
    // this.store.dispatch(FromMessage.sendMessage({message}))
  }

  ngOnInit(): void {

  }


}
