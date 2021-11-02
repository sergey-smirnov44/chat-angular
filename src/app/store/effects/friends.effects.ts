import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import {  FromFriends } from '../actions'
import { Action } from '@ngrx/store';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class FriendsEffects {

  loadUsers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromFriends.loadFriendsList),
      mergeMap(() => this.firestore.collection('users').valueChanges({ idField: 'id' })
        .pipe(
          map(data => FromFriends.loadFriendsListSuccess({ friends: data as Friends[] })),
          catchError(() => of(FromFriends.loadFriendsListFailure))
        ))
    )
  )

  constructor(
    private actions$: Actions,
    private firestore: AngularFirestore
  ) {

  }

}
