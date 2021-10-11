import { ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromMessage from './message.reducer';
import * as fromChannels from './channels.reducer';
import * as fromFriends from './friends.reducer'

export interface State {
  messages: fromMessage.State,
  channels: fromChannels.State,
  friends: fromFriends.State
}

export const reducers: ActionReducerMap<State> = {
  messages: fromMessage.reducer,
  channels: fromChannels.reducer,
  friends: fromFriends.reducer
}

export const selectMessageState = createFeatureSelector<fromMessage.State>('messages')
export const selectChannelsState = createFeatureSelector<fromChannels.State>('channels')
export const selectFriendsState = createFeatureSelector<fromFriends.State>('friends')


export const selectAllMessages = createSelector(
  selectMessageState,
  fromMessage.selectAllMessages
)

export const selectAllChannels = createSelector(
  selectChannelsState,
  fromChannels.selectAllChannels
)

export const selectAllFriends = createSelector(
  selectFriendsState,
  fromFriends.selectAllFriends
)


