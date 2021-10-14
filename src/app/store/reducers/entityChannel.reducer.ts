import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { FromEntityChannel, FromMessage } from 'src/app/store/actions';
import { EntityChannel } from 'src/app/core/common/2_chat-sidebar/entityChannel.interface';
import { Message } from '../../core/common/3_chat/messageChat.interface'
import { Channel } from 'src/app/core/common/3_chat/channelChat.interface';

export interface State extends EntityState<Message> {
  name: string
}

export function selectMessageId(a: Message) {
  return a.id;
}

export const adapter = createEntityAdapter<Message>({
  selectId: selectMessageId
});


export const initialState: State = adapter.getInitialState({
  error: null,
  name: '',
});

const entityChannelReducer = createReducer(
  initialState,
  on(FromEntityChannel.getEntityChannel, (state, channel) => {
    return {
      ...state,
      error: null,
      id: channel.id
    }
  }),
  on(FromEntityChannel.getEntityChannelSuccess, (state, { channel }) => {
    return adapter.setAll(channel.messages, {
      ...state,
      name: channel.name,
    })
  }),
  on(
    FromEntityChannel.getEntityChannelFailure, (state, channel) => {
      return {
        ...state,
        error: channel.err
      }
    }),
  on(FromEntityChannel.sendMessage, (state, { message }) => {
    return adapter.addOne(message, state)
  }),
  on(FromEntityChannel.sendMessageSuccess, (state, action) =>
    adapter.addOne(action.message, state)
  ),

  on(FromEntityChannel.deleteMessage, (state, action) => {
    return adapter.removeOne(action.messageId, state)
  }),
  on(FromEntityChannel.clearChat, state => {
    return adapter.removeAll({ ...state })
  }),
  on(FromEntityChannel.loadMessageSuccess, (state, { message }) => {
    return adapter.setAll(message, { ...state })
  }),
  on(
    FromEntityChannel.clearChatFailure,
    FromEntityChannel.deleteMessageFailure,
    FromEntityChannel.sendMessageFailure, (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }),
);

export function reducer(state: State | undefined, channel: Action) {
  return entityChannelReducer(state, channel)
}

const {
  selectAll
} = adapter.getSelectors();

export const selectEntityChannel = selectAll;
export const getNameChannel = (state: State) => state.name

