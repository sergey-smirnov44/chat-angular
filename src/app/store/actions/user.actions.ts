import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/core/common/4_user/user.interface';


export const getUser = createAction(
  '[USER] User Get',
  props<{ id: string }>()
)

export const getUserSuccess = createAction(
  '[USER] User Get Success',
  props<{ user: User }>()
)

export const getUserFailure = createAction(
  '[USER] User Get Failure',
  props<{ err: any }>()
)

/****************************************************************************/
/***********************DELETE USER FROM FRIENDS*****************************/
/****************************************************************************/
export const deleteUserFromFriends = createAction(
  '[USER] Delete Friend',
  props<{ id: string }>());

export const deleteUserFromFriendsSuccess = createAction(
  '[USER EFFECT] Delete Friend Success')

export const deleteUserFromFriendsFailure = createAction(
  '[USER EFFECT] Delete Friend Failure',
  props<{ error: any }>())
/****************************************************************************/
/*************************ADD USER AS A FRIEND*******************************/
/****************************************************************************/
// export const sendMessage = createAction(
//   '[USER] Send Message',
//   props<{ message: Message }>());
// export const sendMessageSuccess = createAction(
//   '[USER EFFECT] Send Message Success',
//   props<{ message: Message }>());
// export const sendMessageFailure = createAction(
//   '[USER EFFECT] Send Message Failure',
//   props<{ error: any }>());
