import { Action, createReducer, on } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { FromMessage } from '../actions'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { isPackageNameSafeForAnalytics } from '@angular/cli/models/analytics';


export interface State extends EntityState<Message> {
  selectedMessageId: string | null;
}

export const adapter: EntityAdapter<Message> = createEntityAdapter<Message>()

export const initialState: State = adapter.getInitialState({
  selectedMessageId: null
})

// @ts-ignore
// @ts-ignore
const messageReducer = createReducer(
  initialState,
  on(FromMessage.sendMessage, (state, { message }) => {
    return adapter.addOne(message, state)
  }),
  on(FromMessage.deleteMessage, (state, { id }) => {
    return adapter.removeOne(id, state)
  }),
  on(FromMessage.clearChat, state => {
    return adapter.removeAll({ ...state, selectedMessageId: null })
  })
);

export function reducer(state: State | undefined, action: Action) {
  return messageReducer(state, action)
}

export const getSelectedMessageId = (state: State) => state.selectedMessageId

const {
  selectIds,
  selectAll
} = adapter.getSelectors()

export const selectMessageIds = selectIds

export const selectAllMessages = selectAll

// export interface State {
//   message: Message,
//   allMessage: Message[],
//   deleteMessage: Message[],
//   clearChat: Message[]
// }
//
// export const initialState: State = {
//   message:  null,
//   allMessage: null,
//   deleteMessage: null,
//   clearChat: null
// }
//
// export const reducer = createReducer(
//   initialState,
//   on(FromMessage.sendMessage, state => ({
//     ...state,
//     message: null,
//     allMessage: null
//   }))
// )
//
// export const sendMessage = (state: State) => state.message
//
//
//
