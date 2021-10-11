import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromStore from '../../store/reducers'
import { Observable } from 'rxjs';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';
import * as fromFriends from '../../store/actions'


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friend: boolean;

  constructor(private store: Store<FromStore.State>) { }

  friends$: Observable<Friends[]> = this.store.select(FromStore.selectAllFriends)

  ngOnInit(): void {
    this.store.dispatch(fromFriends.FromFriends.loadFriendsList())
  }

}
