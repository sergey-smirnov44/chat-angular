import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, Observable, of, from, exhaustMap } from 'rxjs';
import { Action } from '@ngrx/store';
import {FromAuth} from '../actions';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable()
export class AuthEffects {

  createNewUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromAuth.createNewUser),
      exhaustMap(action => from(this.fireStore.collection('users').add(action.newUser)).pipe(
        map(() => FromAuth.createNewUserSuccess()), catchError(() => of(FromAuth.createNewUserFailure))
      ))
    )
  )
  constructor(
    private actions$: Actions,
    private fireStore: AngularFirestore,
  ) {}
}
