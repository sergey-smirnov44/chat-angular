import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-send-message',
  templateUrl: './field-send-message.component.html',
  styleUrls: ['./field-send-message.component.scss']
})
export class FieldSendMessageComponent implements OnInit {
  public fieldInput = '';
  public isEmojiPickerVisible: boolean;
  public addEmoji(event) {
    this.fieldInput = `${this.fieldInput}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
