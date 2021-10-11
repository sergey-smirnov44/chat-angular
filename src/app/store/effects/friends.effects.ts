import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Service } from 'src/app/3_chat/messages-list/message/message.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { FromFriends } from '../actions'
import { Action } from '@ngrx/store';
import { ChatSidebarService } from 'src/app/2_chat-sidebar/chat-sidebar.service';


@Injectable()
export class FriendsEffects {

  loadFriends$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromFriends.loadFriendsList),
      mergeMap(() => this.chatSidebarService.getFriendsList()
        .pipe(
          map(data => FromFriends.loadFriendsListSuccess({ friends: data })),
          catchError(() => of(FromFriends.loadFriendsListFailure))
        ))
    )
  )




  constructor(
    private actions$: Actions,
    private chatSidebarService: ChatSidebarService
  ) {

  }

}
