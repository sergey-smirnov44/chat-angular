import { CLEAR_CHAT, DELETE_MESSAGE, MessageActions, SEND_MESSAGE } from 'src/app/3_chat/chat.actions';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface Chat {
  allMessages: Message[],
  deleteMessage: Message[],
  clearChat: Message[]
}

const initialChat: Chat = {
  allMessages: [],
  deleteMessage: null,
  clearChat: null
}


export function  messagesReducer( state: Chat = initialChat, action: MessageActions ) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        allMessages: action.payload
      }
    case DELETE_MESSAGE:
      return  {
        ...state,
        deleteMessage: { ...state.allMessages.find(id => id === action.payload) }
      }
    case CLEAR_CHAT:
      return  {
        ...state,
        allMessages: null
      }
    default:
      return state
  }
}

export const getMessageState = createFeatureSelector<Chat>('message')

export  const  getAllMessages = createSelector(getMessageState, (state: Chat) => state.allMessages)
export  const  getDeleteMessage = createSelector(getMessageState, (state: Chat) => state.allMessages)
export  const  getClearChat = createSelector(getMessageState, (state: Chat) => state.allMessages)
