import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { Store } from '@ngrx/store';
import { map, mergeMap, Observable, Subscription } from 'rxjs';
import * as fromStore from '../../../store/reducers'
import { FromEntityChannel } from 'src/app/store/actions';
import { log } from 'util';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],

})
export class MessageComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<fromStore.State>,
  ) {}

  newMess: Subscription;
  messages$: Observable<Message[]> = this.store.select(fromStore.selectEntityChannel);


  ngOnInit(): void {
    this.newMess = this.messages$.pipe(map(thing =>
      thing.sort(this.sortDate))).subscribe(() => this.messages$)
  }

  deleteMessage(messageId: string) {
    this.store.dispatch(FromEntityChannel.deleteMessage({ messageId }))
  }


  ngOnDestroy() {
    if (this.newMess) {
      this.newMess.unsubscribe()
    }
  }

  sortDate(a, b) {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  };





}
