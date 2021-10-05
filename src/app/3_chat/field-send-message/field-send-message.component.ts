import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-field-send-message',
  templateUrl: './field-send-message.component.html',
  styleUrls: ['./field-send-message.component.scss']
})
export class FieldSendMessageComponent implements OnInit {
  public id: Guid;
  public fieldInput = '';
  public isEmojiPickerVisible: boolean;

  public addEmoji(event) {
    this.fieldInput = `${ this.fieldInput }${ event.emoji.native }`;
    this.isEmojiPickerVisible = false;
  }

  constructor() {
    this.id = Guid.create() // используй Guid для id сообщений
  }

  ngOnInit(): void {
  }

}
