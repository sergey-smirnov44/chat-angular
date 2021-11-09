import {Action, createReducer, on} from '@ngrx/store';
import { FromAuth } from 'src/app/_modules/auth/store/actions';


export interface State {
  isAuthenticated: boolean,
  username: string
}

export const initialState: State = {
  isAuthenticated: true,
  username: ''
}

export const authReducer = createReducer(
  initialState,
  on(FromAuth.SET_AUTHENTICATED, (state) => {
    return {  ...state, isAuthenticated: true }
  }),
  on(FromAuth.SET_UNAUTHENTICATED, (state) => {
    return {  ...state, isAuthenticated: false }
  }),
  on(FromAuth.createNewUser, (state, { newUser }) => {
    return {
      ...state,
      username: newUser.username
    }
  })
)


export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action)
}

export const getIsAuth = (state: State) => state.isAuthenticated
export const getIsUserName = (state: State) => state.username
