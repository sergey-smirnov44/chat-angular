import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromStore from '../../store/reducers'
import { Observable } from 'rxjs';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';
import * as fromFriends from '../../store/actions'
import { ChatSidebarService } from 'src/app/core/services/chat-sidebar.service';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FriendsComponent implements OnInit {
  friends$: Observable<Friends[]> = this.store.select(FromStore.selectAllFriends)
  constructor(
    private store: Store<FromStore.State>,
    private readonly chatService: ChatSidebarService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromFriends.FromFriends.loadFriendsList())
  }

  showUser(id) {
    this.chatService.getFriendsById(id).subscribe(res => console.log(res))
  }
}
