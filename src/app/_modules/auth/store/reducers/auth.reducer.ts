import {Action, createReducer, on} from '@ngrx/store';
import { FromAuth } from 'src/app/_modules/auth/store/actions';


export interface State {
  isAuth: boolean
}

export const initialState: State = {
  isAuth: false
}

export const authReducer = createReducer(
  initialState,
  on(FromAuth.setAuthenticated, () => {
    return { isAuth: true }
  }),
  on(FromAuth.setUnAuthenticated, () => {
    return { isAuth: false }
  }),
  // on(FromAuth.createNewUser, (state, { newUser }) => {
  //   return {
  //     ...state,
  //     username: newUser.username
  //   }
  // })
)
// export function authReducer(state = initialState, action: AuthActions) {
//   switch (action.type) {
//     case SET_AUTHENTICATED :
//       return {isAuthenticated: true}
//     case SET_UNAUTHENTICATED :
//       return {isAuthenticated: false}
//     default :
//       return state
//   }
// }


export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action)
}

export const getIsAuth = (state: State) => state.isAuth
// export const getIsUserName = (state: State) => state.username

// import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from '../actions/auth.actions'
//
//
// export interface State {
//   isAuthenticated: boolean
// }
//
// const initialState: State = {
//   isAuthenticated: false
// }
//
// export function authReducer(state = initialState, action: AuthActions) {
//   switch (action.type) {
//     case SET_AUTHENTICATED :
//       return {isAuthenticated: true}
//     case SET_UNAUTHENTICATED :
//       return {isAuthenticated: false}
//     default :
//       return state
//   }
// }
//
// export const getIsAuth = (state: State) => state.isAuthenticated
