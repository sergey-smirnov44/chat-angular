import { Action, createReducer, on } from '@ngrx/store';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
import { FromMessage } from '../actions'
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface State extends EntityState<Message> {}

export function selectMessageId(a: Message): any {
  return a.id;
}

export const adapter = createEntityAdapter<Message>({
  selectId: selectMessageId
});

export const initialState: State = adapter.getInitialState({

});

const messageReducer = createReducer(
  initialState,
  on(FromMessage.sendMessage, (state, { message }) => {
    return adapter.addOne(message, state)
  }),
  on(FromMessage.deleteMessage, (state, { id }) => {
    return adapter.removeOne(id, state)
  }),
  on(FromMessage.clearChat, state => {
    return adapter.removeAll({ ...state })
  })
);

export function reducer(state: State | undefined, action: Action) {
  return messageReducer(state, action)
}

const {
  selectAll, selectIds
} = adapter.getSelectors();

export const selectAllMessages = selectAll;
