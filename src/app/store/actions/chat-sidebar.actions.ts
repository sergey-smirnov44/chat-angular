import { createAction, props } from '@ngrx/store';
import {Channels} from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';


/****************************************************************************/
/***************************LOADING CHANNELS*********************************/
/****************************************************************************/

export const loadChannels = createAction(
  '[CHANNELS] load channels');

export const loadChannelsSuccess = createAction(
  '[CHANNELS EFFECT] load channels success',
  props<{ channels: Channels[] }>());

export const loadChannelsFailure = createAction(
  '[CHANNELS EFFECT] Load Channels Failure',
  props<{ error: any }>());

/****************************************************************************/
/***************************LOADING FRIENDS LIST*****************************/
/****************************************************************************/
export const loadFriendsList = createAction(
  '[FRIENDS] load friends list');

export const loadFriendsListSuccess = createAction(
  '[FRIENDS] load friends list success',
  props<{ message: Friends[] }>());
