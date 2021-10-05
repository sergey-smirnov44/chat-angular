import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'src/app/3_chat/messages-list/message/message.service';
import { catchError, EMPTY, map, mergeMap, of } from 'rxjs';


@Injectable()
export class MessageEffects {

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Message dispatch] Load new message'),
      mergeMap(() => this.messageService.getAll()
        .pipe(
          map(messages => ({ type: '[Messages API] Messages loaded Success', payload: messages })),
          catchError(() => of({ type: '[Messages API] Messages Loaded Error' }))
        ))
    )
  )

  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}

}
