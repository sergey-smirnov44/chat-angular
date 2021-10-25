import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FromStore from '../../store/reducers'
import { Observable } from 'rxjs';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';
import * as fromFriends from '../../store/actions'
import { ChatSidebarService } from 'src/app/core/services/chat-sidebar.service';
import { Router } from '@angular/router';
import * as FromUser from '../../store/actions/user.actions'
import { FromUsers } from '../../store/actions';


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
    private readonly chatService: ChatSidebarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromFriends.FromFriends.loadFriendsList())
  }

  showUser(id) {
    this.store.dispatch(FromUsers.getUser({id}))
    this.chatService.getUserById(id).subscribe(res => console.log(res))
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }
}
