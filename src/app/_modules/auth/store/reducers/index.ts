import { ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAuth from './auth.reducer'
import * as fromLoading from './loading.reducer'



export interface State {
  auth: fromAuth.State,
  loading: fromLoading.State
}
export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  loading: fromLoading.reducer
}


export const getAuthState = createFeatureSelector<fromAuth.State>('auth')
export const getLoadingState = createFeatureSelector<fromLoading.State>('loading')

export const getIsAuth = createSelector(
  getAuthState,
  fromAuth.getIsAuth
)

export const getIsLoading = createSelector(
  getLoadingState,
  fromLoading.getIsLoading
)
