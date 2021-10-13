import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { FromChannels } from 'src/app/store/actions';


export interface State extends EntityState<Channels> {
}

export function selectMessageId(a: Channels) {
  return a.id;
}

export const adapter = createEntityAdapter<Channels>({
  selectId: selectMessageId
});

export const initialState: State = adapter.getInitialState({
  error: null
});

const channelsReducer = createReducer(
  initialState,
  on(FromChannels.loadChannelsSuccess, (state, { channels }) => {
    return adapter.setAll(channels, { ...state })
  }),
  on(
    FromChannels.loadChannelsFailure, (state, channels) => {
      return {
        ...state,
        error: channels.error
      }
    }),
);

export function reducer(state: State | undefined, channels: Action) {
  return channelsReducer(state, channels)
}

const {
  selectAll
} = adapter.getSelectors();

export const selectAllChannels = selectAll;
