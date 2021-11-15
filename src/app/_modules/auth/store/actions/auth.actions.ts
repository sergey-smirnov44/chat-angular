import { Action, createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/common/4_user/user.interface';

/****************************************************************************/
/******************************   Login   ***********************************/
/****************************************************************************/

export const setAuthenticated = createAction(
  '[LOGIN]  Authenticated'
);

export const setUnAuthenticated = createAction(
  '[LOGIN]  UnAuthenticated'
);

/****************************************************************************/
/********************  Sign Up (Create New User)  ***************************/
/****************************************************************************/

export const createNewUser = createAction(
  '[CREATE NEW USER] Create New User',
  props<{ newUser: User }>()
);

export const createNewUserSuccess = createAction(
  '[CREATE NEW USER] Create New User Success');

export const createNewUserFailure = createAction(
  '[CREATE NEW USER] Create New User Failure',
  props<{ error: any }>());


//
// export const SET_AUTHENTICATED = '[Auth] Set Authenticated'
// export const SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated'
//
// export class SetAuthenticated implements Action {
//   readonly type = SET_AUTHENTICATED
// }
//
// export class SetUnauthenticated implements Action {
//   readonly type = SET_UNAUTHENTICATED
// }
//
// export type AuthActions = SetAuthenticated | SetUnauthenticated

