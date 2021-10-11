import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { ChatSidebarService } from 'src/app/2_chat-sidebar/chat-sidebar.service';
import { FromChannels } from 'src/app/store/actions';


@Injectable()
export class ChannelsEffects {

  loadChannels$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromChannels.loadChannels),
      mergeMap(() => this.chatSidebarService.getChannels()
        .pipe(
          map(data => FromChannels.loadChannelsSuccess({ channels: data })),
          catchError(() => of(FromChannels.loadChannelsFailure))
        ))
    )
  )




  constructor(
    private actions$: Actions,
    private chatSidebarService: ChatSidebarService
  ) {

  }

}
