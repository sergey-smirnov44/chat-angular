import { createAction, props } from '@ngrx/store';
import { EntityChannel } from '../../core/common/2_chat-sidebar/entityChannel.interface'


export const getEntityChannel = createAction(
  '[ENTITY CHANNEL] Entity Channel Get',
  props<{ id: string }>()
)

export const getEntityChannelSuccess = createAction(
  '[ENTITY CHANNEL] Entity Channel Get Success',
  props<{ channel: EntityChannel }>()
)

export const getEntityChannelFailure = createAction(
  '[ENTITY CHANNEL] Entity Channel Get Failure',
  props<{ err: any }>()
)
