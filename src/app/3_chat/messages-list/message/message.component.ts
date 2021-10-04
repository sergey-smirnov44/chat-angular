import { Component, OnInit, Input } from '@angular/core';
import {Message} from 'src/app/core/common/3_chat/messageChat.interface';
import {Store} from '@ngrx/store';
import MessageJson from '../../../data.json'
import { Observable } from 'rxjs';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

messages = MessageJson as Message[]

  constructor( private store: Store<Message>) { }

  @Input()

  ngOnInit(): void {

  }

}
