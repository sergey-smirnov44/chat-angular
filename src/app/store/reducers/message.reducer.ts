// import { Action, createReducer, on } from '@ngrx/store';
// import { Message } from 'src/app/core/common/3_chat/messageChat.interface';
// import { FromMessage } from '../actions'
// import { EntityState, createEntityAdapter } from '@ngrx/entity';
//
// export interface State extends EntityState<Message> {
// }
//
// export function selectMessageId(a: Message) {
//   return a.id;
// }
//
// export const adapter = createEntityAdapter<Message>({
//   selectId: selectMessageId
// });
//
// export const initialState: State = adapter.getInitialState({
//   error: null
// });
//
// const messageReducer = createReducer(
//   initialState,
//   on(FromMessage.sendMessage, (state, { message }) => {
//     return adapter.addOne(message, state)
//   }),
//   on(FromMessage.sendMessageSuccess, (state, action) =>
//     adapter.addOne(action.message, state)
//   ),
//
//   on(FromMessage.deleteMessage, (state, action) => {
//     return adapter.removeOne(action.messageId, state)
//   }),
//   on(FromMessage.clearChat, state => {
//     return adapter.removeAll({ ...state })
//   }),
//   on(FromMessage.loadMessageSuccess, (state, { message }) => {
//     return adapter.setAll(message, { ...state })
//   }),
//   on(
//     FromMessage.clearChatFailure,
//     FromMessage.deleteMessageFailure,
//     FromMessage.sendMessageFailure, (state, action) => {
//       return {
//         ...state,
//         error: action.error
//       }
//     }),
// );
//
// export function reducer(state: State | undefined, action: Action) {
//   return messageReducer(state, action)
// }
//
// const {
//   selectAll
// } = adapter.getSelectors();
//
// export const selectAllMessages = selectAll;
