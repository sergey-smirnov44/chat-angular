import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { Store } from '@ngrx/store';
import { filter, map, Observable, pipe, Subscription } from 'rxjs';
import * as fromStore from '../../../store/reducers'
import { FromEntityChannel } from 'src/app/store/actions';
import { log } from 'util';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnDestroy {
  constructor(private store: Store<fromStore.State>) {}

  messages$: Observable<Message[]> = this.store.select(fromStore.selectEntityChannel);
  response: any

  mes: Subscription
@Output() SearchValue


  ngOnInit(): void {
    // this.messages$.subscribe((data) => {
    //   data.forEach(el => console.log(el))
    // })

    // this.mes = this.messages$.pipe(map(itemData => {
    //   return itemData.map(value => value)
    // })).subscribe(x => x.filter(a => a.text === this.SearchValue).map(y => console.log(y)))
    // console.log(this.SearchValue)

  }

  deleteMessage(messageId: string) {
    this.store.dispatch(FromEntityChannel.deleteMessage({ messageId }))
  }

  ngOnDestroy() {
    if (this.mes) {
      this.mes.unsubscribe()
    }

  }
}
