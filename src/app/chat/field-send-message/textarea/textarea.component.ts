import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

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
