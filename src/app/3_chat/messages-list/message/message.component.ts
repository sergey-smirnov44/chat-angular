import { Component, OnInit, Input } from '@angular/core';
import {Message} from 'src/app/core/common/3_chat/messageChat.interface';
import {Store} from '@ngrx/store';
import MessageJson from '../../../data.json'
import { Observable } from 'rxjs';
import * as fromStore from '../../../store/reducers'



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  constructor(private store: Store<fromStore.State>) {}

// messages = MessageJson as Message[]

  messages$: Observable<Message[]> = this.store.select(fromStore.selectAllMessages)

  @Input()

  ngOnInit(): void {

  }

}
