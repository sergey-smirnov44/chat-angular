import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

import { FromEntityChannel } from 'src/app/store/actions';
import { EntityChannel } from 'src/app/core/common/2_chat-sidebar/entityChannel.interface';

export interface State extends EntityState<EntityChannel> {
  name: string
}

export function selectMessageId(a: EntityChannel) {
  return a.id;
}

export const adapter = createEntityAdapter<EntityChannel>({
  selectId: selectMessageId
});


export const initialState: State = adapter.getInitialState({
  error: null,
  name: '1'
});

const entityChannelReducer = createReducer(
  initialState,
  on(FromEntityChannel.getEntityChannel, (state, channel) => {
    return {
      ...state,
      error: null
    }
  }),
  on(FromEntityChannel.getEntityChannelSuccess, (state, channel ) => {
    return adapter.setAll(channel.channel.message, {...state},  channel.channel.name )
  }),
  on(
    FromEntityChannel.getEntityChannelFailure, (state, channel) => {
      return {
        ...state,
        error: channel.err
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

