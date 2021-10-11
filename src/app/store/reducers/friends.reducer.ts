import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';
import { FromFriends } from 'src/app/store/actions';

export interface State extends EntityState<Friends> {
}

export function selectMessageId(a: Friends) {
  return a.id;
}

export const adapter = createEntityAdapter<Friends>({
  selectId: selectMessageId
});

export const initialState: State = adapter.getInitialState({
  error: null
});

const friendsReducer = createReducer(
  initialState,
  on(FromFriends.loadFriendsListSuccess, (state, { friends }) => {
    return adapter.setAll(friends, { ...state })
  }),
  on(

    FromFriends.loadFriendsListFailure, (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }),
);

export function reducer(state: State | undefined, action: Action) {
  return friendsReducer(state, action)
}

const {
  selectAll
} = adapter.getSelectors();

export const selectAllFriends = selectAll;
