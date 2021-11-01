import {Action, createReducer, on} from '@ngrx/store';
import { FromAuth } from 'src/app/_modules/auth/store/actions';


export interface State {
  isAuthenticated: boolean
}

export const initialState: State = {
  isAuthenticated: true
}

export const authReducer = createReducer(
  initialState,
  on(FromAuth.SET_AUTHENTICATED, (state) => {
    return {  isAuthenticated: true }
  }),
  on(FromAuth.SET_UNAUTHENTICATED, (state) => {
    return {  isAuthenticated: false }
  })
)


export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action)
}

export const getIsAuth = (state: State) => state.isAuthenticated
