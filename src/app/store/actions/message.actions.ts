import { createAction, props } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';

export const sendMessage = createAction(
  '[MESSAGE] send message',
  props <{ message: Message }>());


export const deleteMessage = createAction('[MESSAGE] delete message',
props<{ id: number }>());


export const clearChat = createAction('[MESSAGE] Clear Chat',
  props<{ clearChat: Message[] }>());


