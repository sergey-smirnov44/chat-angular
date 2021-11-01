import { createAction } from '@ngrx/store';

export const SET_AUTHENTICATED = createAction(
  '[LOGIN] SET_AUTHENTICATED'
);

export const SET_UNAUTHENTICATED = createAction(
  '[LOGIN] SET_UNAUTHENTICATED'
);
