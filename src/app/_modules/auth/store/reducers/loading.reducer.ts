import { Action, createReducer, on } from '@ngrx/store';
import { FromLoading } from 'src/app/_modules/auth/store/actions';


export interface State {
  isLoading: boolean
}

export const initialState: State = {
  isLoading: true
}

export const loadingReducer = createReducer(
  initialState,
  on(FromLoading.START_LOADING, () => {
    return { isLoading: true }
  }),
  on(FromLoading.STOP_LOADING, () => {
    return { isLoading: false }
  })
)


export function reducer(state: State | undefined, action: Action) {
  return loadingReducer(state, action)
}

export const getIsLoading = (state: State) => state.isLoading
