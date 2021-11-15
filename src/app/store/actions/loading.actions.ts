import { createAction } from '@ngrx/store';


export const START_LOADING = createAction(
  '[UI] START_LOADING'
);

export const STOP_LOADING = createAction(
  '[UI] STOP_LOADING'
);
