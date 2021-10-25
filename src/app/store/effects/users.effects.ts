import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { FromUsers } from '../actions'
import { Action } from '@ngrx/store';
import { ChatSidebarService } from 'src/app/core/services/chat-sidebar.service';


@Injectable()
export class UsersEffects {

  loadUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromUsers.getUser),
      mergeMap(action => this.chatSidebarService.getUserById(action.id)
        .pipe(
          map(data => FromUsers.getUserSuccess({ user: data })),
          catchError(() => of(FromUsers.getUserFailure))
        ))
    )
  )

  // deleteFriendUser$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(FromUsers.getUser),
  //     mergeMap(action => this.chatSidebarService.getUserById(action.id)
  //       .pipe(
  //         map(data => FromUsers.getUserSuccess({ user: data })),
  //         catchError(() => of(FromUsers.getUserFailure))
  //       ))
  //   )
  // )
  //
  // addFriendUser$: Observable<Action> = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(FromUsers.getUser),
  //     mergeMap(action => this.chatSidebarService.getUserById(action.id)
  //       .pipe(
  //         map(data => FromUsers.getUserSuccess({ user: data })),
  //         catchError(() => of(FromUsers.getUserFailure))
  //       ))
  //   )
  // )


  constructor(
    private actions$: Actions,
    private chatSidebarService: ChatSidebarService
  ) {

  }

}
