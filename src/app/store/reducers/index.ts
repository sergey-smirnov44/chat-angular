import { ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromMessage from './message.reducer'

export interface State {
  messages: fromMessage.State
}

export const reducers: ActionReducerMap<State> = {
  messages: fromMessage.reducer
}

export const selectMessageState = createFeatureSelector<fromMessage.State>('messages')


// export const selectMessageId = createSelector(
//   selectMessageState,
//   fromMessage.selectMessageId
// )

export const selectAllMessages = createSelector(
  selectMessageState,
  fromMessage.selectAllMessages
)


