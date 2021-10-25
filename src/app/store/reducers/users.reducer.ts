import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { FromUsers } from 'src/app/store/actions';
import { User } from 'src/app/core/common/4_user/user.interface';

export interface State extends EntityState<User> {}

export function selectUserId(a: User) {
  return a.id;
}

export const adapter = createEntityAdapter<User>({
  selectId: selectUserId
});

export const initialState: State = adapter.getInitialState({
  error: null
});

const entityUserReducer = createReducer(
  initialState,
  on(FromUsers.getUser, (state, user) => {
    return {
      ...state,
      error: null,
      id: user.id
    }
  }),
  on(FromUsers.getUserSuccess, (state, { user }) => {
    return adapter.setOne(user, { ...state })
  }),
  on(
    FromUsers.getUserFailure, (state, user) => {
      return {
        ...state,
        error: user.err
      }
    }),
//   on(FromUsers.sendMessage, (state, { message }) => {
//     return adapter.addOne(message, state)
//   }),
//   on(FromUsers.sendMessageSuccess, (state, action) =>
//     adapter.addOne(action.message, state)
//   ),
//   on(FromUsers.deleteMessage, (state, action) => {
//     return adapter.removeOne(action.messageId, state)
//   }),
//   on(
//     FromUsers.deleteMessageFailure,
//     FromUsers.sendMessageFailure, (state, action) => {
//       return {
//         ...state,
//         error: action.error
//       }
//     })
);

export function reducer(state: State | undefined, user: Action) {
  return entityUserReducer(state, user)
}

const {
  selectAll
} = adapter.getSelectors();

export const selectUser = (state: State) =>  Object.values(state.entities);
// export const selectUser = selectAll


