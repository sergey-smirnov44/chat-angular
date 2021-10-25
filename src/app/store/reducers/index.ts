import { ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromChannels from './channels.reducer';
import * as fromFriends from './friends.reducer'
import * as fromEntityChannel from './entityChannel.reducer'
import * as fromUser from './users.reducer'

export interface State {
  channels: fromChannels.State,
  friends: fromFriends.State,
  channel: fromEntityChannel.State,
  user: fromUser.State
}

export const reducers: ActionReducerMap<State> = {
  channels: fromChannels.reducer,
  friends: fromFriends.reducer,
  channel: fromEntityChannel.reducer,
  user: fromUser.reducer
}


export const selectChannelsState = createFeatureSelector<fromChannels.State>('channels')
export const selectFriendsState = createFeatureSelector<fromFriends.State>('friends')
export const selectEntityChannelState = createFeatureSelector<fromEntityChannel.State>('channel')
export const selectUserState = createFeatureSelector<fromUser.State>('user')

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

export const selectUser = createSelector(
  selectUserState,
  fromUser.selectUserId
)



