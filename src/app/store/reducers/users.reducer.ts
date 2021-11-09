import { Action, createReducer, on } from '@ngrx/store';
import { FromUsers } from 'src/app/store/actions';
import { User } from 'src/app/core/common/4_user/user.interface';

export interface State {
  userInfo: User;
  isLoading: boolean;
  isLoaded: boolean;
}

export const initialState: State = {
  userInfo: null,
  isLoading: true,
  isLoaded: false,
};

const userReducer = createReducer(
  initialState,
  on(FromUsers.getUser, (state) => {
    return {
      ...state,
      userInfo: null
    }
  }),
  on(FromUsers.getUserSuccess, (state, { user }) => {
    return {
      ...state,
      isLoaded: true,
      isLoading: false,
      userInfo: user
    }
  }),
  on(
    FromUsers.getUserFailure, (state, user) => {
      return {
        ...state,
        userInfo: user.err
      }
    }),
);

export function reducer(state: State | undefined, user: Action) {
  return userReducer(state, user)
}

export const selectUser = (state: State) => state.userInfo


