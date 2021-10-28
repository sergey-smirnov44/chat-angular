import { createAction, props } from '@ngrx/store';
import { Login } from 'src/app/_modules/auth/core/models/login.model';

export const SET_AUTHENTICATED = createAction(
  '[LOGIN] SET_AUTHENTICATED'
);

export const SET_UNAUTHENTICATED = createAction(
  '[LOGIN] SET_UNAUTHENTICATED'
);
