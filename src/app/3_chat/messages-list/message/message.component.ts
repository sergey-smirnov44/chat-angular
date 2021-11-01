import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { Store } from '@ngrx/store';
import { map, mergeMap, Observable, Subscription } from 'rxjs';
import * as fromStore from '../../../store/reducers'
import { FromEntityChannel } from 'src/app/store/actions';
import { log } from 'util';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],

})
export class MessageComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<fromStore.State>,
    private ac: ActivatedRoute
  ) {}

  newMess: Subscription;
  messages$: Observable<Message[]> = this.store.select(fromStore.selectEntityChannel);


  ngOnInit(): void {
    this.newMess = this.messages$.pipe(map(thing =>
      thing.sort(this.sortDate))).subscribe(() => this.messages$)
  }

  get id(): string {
    return this.ac.snapshot.params['id'];
  }

  deleteMessage(messageId: string) {
    this.store.dispatch(FromEntityChannel.deleteMessage({ messageId, channelId: this.id }))
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
