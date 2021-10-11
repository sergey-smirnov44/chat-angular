import { createAction, props } from '@ngrx/store';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';

/****************************************************************************/
/***************************LOADING FRIENDS LIST*****************************/
/****************************************************************************/
export const loadFriendsList = createAction(
  '[FRIENDS] load friends list');

export const loadFriendsListSuccess = createAction(
  '[FRIENDS EFFECT] load friends list success',
  props<{ friends: Friends[] }>());

export const loadFriendsListFailure = createAction(
  '[FRIENDS EFFECT] load friends list failure',
  props<{ error: any }>());
