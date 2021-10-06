import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from 'src/app/3_chat/messages-list/message/message.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { FromMessage } from 'src/app/store/actions';
import { Action } from '@ngrx/store';


@Injectable()
export class MessageEffects {

  loadMessages$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromMessage.loadMessage),
      mergeMap(() => this.messageService.getAll()
        .pipe(
          map(data => FromMessage.loadMessageSuccess({ message: data })),
          catchError(() => of({ type: '[Messages API] Messages Loaded Error' }))
        ))
    )
  )


  constructor(
    private actions$: Actions,
    private messageService: MessageService
  ) {}

}
