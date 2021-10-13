/****************************************************************************/
/***************************SEARCH MESSAGE***********************************/
/****************************************************************************/
import { createAction, props } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';

export const searchMessage = createAction(
  '[MESSAGE SEARCH] Search Message',
  props<{ query: string }>()
)

export const searchMessageSuccess = createAction(
  '[MESSAGE SEARCH] Search Message Success',
  props<{ message: Message[] }>()
)

export const searchMessageFailure = createAction(
  '[MESSAGE SEARCH] Search Message Failure',
  props<{ err: any }>()
)
