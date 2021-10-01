import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { Date } from 'src/app/core/common/3_chat/dateChat.interface'; // пока под вопросом...интерефейс для даты над
                                                                      // -->                              сообщением
import { Action } from '@ngrx/store';


export const SEND_MESSAGE = '[Message] Send Message'
export const DELETE_MESSAGE = '[Message] Delete Message'
export const CLEAR_CHAT = '[Messages-List] Clear Chat'

export class SendMessage implements Action {
  readonly type = SEND_MESSAGE

  constructor(public payload: Message) {}
}

export class DeleteMessage implements Action {
  readonly type = DELETE_MESSAGE

  constructor(public payload: { id: number }) {}
}

export class ClearChat implements Action {
  readonly type = CLEAR_CHAT

  constructor(public payload: Message[]) {}
}

export type MessageUnion =
  | SendMessage
  | DeleteMessage
  | ClearChat
