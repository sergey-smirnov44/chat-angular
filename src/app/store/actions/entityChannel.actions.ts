import { createAction, props } from '@ngrx/store';
import { EntityChannel } from '../../core/common/2_chat-sidebar/entityChannel.interface'
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';


export const getEntityChannel = createAction(
  '[ENTITY CHANNEL] Entity Channel Get',
  props<{ id: string }>()
)

export const getEntityChannelSuccess = createAction(
  '[ENTITY CHANNEL] Entity Channel Get Success',
  props<{ channel: EntityChannel }>()
)

export const getMessageslSuccess = createAction(
  '[ENTITY CHANNEL] Entity Channel Get Messages Success',
  props<{ messages: Message[] }>()
)

export const getEntityChannelFailure = createAction(
  '[ENTITY CHANNEL] Entity Channel Get Failure',
  props<{ err: any }>()
)

/****************************************************************************/
/***************************DELETE 1 MESSAGE***********************************/
/****************************************************************************/
export const deleteMessage = createAction(
  '[MESSAGE] Delete Message',
  props<{ messageId: string, channelId: string }>());

export const deleteMessageSuccess = createAction(
  '[MESSAGE EFFECT] Delete Message Success')

export const deleteMessageFailure = createAction(
  '[MESSAGE EFFECT] Delete Message Failure',
  props<{ error: any }>())
/****************************************************************************/
/***************************SEND MESSAGE***********************************/
/****************************************************************************/
export const sendMessage = createAction(
  '[MESSAGE] Send Message',
  props<{ channelId: string, message: Message }>());
export const sendMessageSuccess = createAction(
  '[MESSAGE EFFECT] Send Message Success');
export const sendMessageFailure = createAction(
  '[MESSAGE EFFECT] Send Message Failure',
  props<{ error: any }>());
/****************************************************************************/
/***************************DELETE ALL MESSAGES***********************************/
/****************************************************************************/
export const clearChat = createAction(
  '[MESSAGE] Clear Chat',
  props<{ ids: Message[], channelId: string }>());

export const clearChatSuccess = createAction(
  '[MESSAGE EFFECT] Delete Chat Success')

export const clearChatFailure = createAction(
  '[MESSAGE EFFECT] Delete Chat Failure',
  props<{ error: any }>())

/****************************************************************************/
/***************************LOADING MESSAGE***********************************/
/****************************************************************************/

export const loadMessage = createAction(
  '[MESSAGE] load message');

export const loadMessageSuccess = createAction(
  '[MESSAGE] load message success',
  props<{ message: Message[] }>());

/****************************************************************************/
/***************************GET VALUE SEARCH***********************************/
/****************************************************************************/

export const getValueSearch = createAction(
  '[SEARCH VALUE] get search value',
  props<{ searchValue: any }>()
)
