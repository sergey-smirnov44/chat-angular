import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromStore from '../../store/reducers'
import { count, Observable } from 'rxjs';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';
import * as fromFriends from '../../store/actions'
import { FromUsers } from '../../store/actions';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FriendsComponent implements OnInit {
  friends$: Observable<Friends[]> = this.store.select(FromStore.selectAllFriends)

  count = require('rxjs').count;

  constructor(
    private store: Store<FromStore.State>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(fromFriends.FromFriends.loadFriendsList())
  }

  showUser(id) {
    this.store.dispatch(FromUsers.getUser({ id }))
  }
}
