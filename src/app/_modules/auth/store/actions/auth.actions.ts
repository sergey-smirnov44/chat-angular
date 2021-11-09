import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/common/4_user/user.interface';

/****************************************************************************/
/******************************   Login   ***********************************/
/****************************************************************************/

export const SET_AUTHENTICATED = createAction(
  '[LOGIN] SET_AUTHENTICATED'
);

export const SET_UNAUTHENTICATED = createAction(
  '[LOGIN] SET_UNAUTHENTICATED'
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
