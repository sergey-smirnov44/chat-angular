import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromStore from '../../store/reducers'
import { count, map, Observable, of, Subscription } from 'rxjs';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';
import * as fromFriends from '../../store/actions'
import { FromUsers } from '../../store/actions';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FriendsComponent implements OnInit, OnDestroy {
  friends$: Observable<Friends[]> = this.store.select(FromStore.selectAllFriends)

  constructor(
    private store: Store<FromStore.State>,
    private firestore: AngularFirestore,
  ) {}

  countUsers: Subscription
  countUsers$: Observable<any> = this.firestore.collection('users').valueChanges()

  countFriends$: Observable<any> = this.firestore.collection('users').valueChanges()

  ngOnInit(): void {
    this.store.dispatch(fromFriends.FromFriends.loadFriendsList())
    this.countUsers = this.countUsers$.pipe(map(b => b.length)).subscribe((res) => {this.countUsers$ = of(res)})
  }

  showUser(id) {
    this.store.dispatch(FromUsers.getUser({ id }))
  }

  ngOnDestroy() {
    if (this.countUsers) {
      this.countUsers.unsubscribe()
    }
  }
}
