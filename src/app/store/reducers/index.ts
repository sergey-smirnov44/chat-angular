import { ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromChannels from './channels.reducer';
import * as fromFriends from './friends.reducer'
import * as fromEntityChannel from './entityChannel.reducer'

export interface State {
  channels: fromChannels.State,
  friends: fromFriends.State,
  channel: fromEntityChannel.State
}

export const reducers: ActionReducerMap<State> = {
  channels: fromChannels.reducer,
  friends: fromFriends.reducer,
  channel: fromEntityChannel.reducer
}


export const selectChannelsState = createFeatureSelector<fromChannels.State>('channels')
export const selectFriendsState = createFeatureSelector<fromFriends.State>('friends')
export const selectEntityChannelState = createFeatureSelector<fromEntityChannel.State>('channel')

export const selectAllChannels = createSelector(
  selectChannelsState,
  fromChannels.selectAllChannels
)

export const selectAllFriends = createSelector(
  selectFriendsState,
  fromFriends.selectAllFriends
)

export const selectEntityChannel = createSelector(
  selectEntityChannelState,
  fromEntityChannel.selectEntityChannel
)

export const getNameChannel = createSelector(
  selectEntityChannelState,
  fromEntityChannel.getNameChannel
)



