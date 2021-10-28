import { ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAuth from './auth.reducer'



export interface State {
  auth: fromAuth.State
}
export const AuthReducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer
}


export const getAuthState = createFeatureSelector<fromAuth.State>('auth')

export const getIsAuth = createSelector(
  getAuthState,
  fromAuth.getIsAuth
)
