import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { ChatSidebarService } from 'src/app/core/services/chat-sidebar.service';
import { FromChannels, FromEntityChannel } from 'src/app/store/actions';
import { ChannelService } from 'src/app/core/services/channel.service';


@Injectable()
export class ChannelsEffects {

  loadChannels$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromChannels.loadChannels),
      mergeMap(() => this.channelService.getChannels()
        .pipe(
          map(data => FromChannels.loadChannelsSuccess({ channels: data })),
          catchError(() => of(FromChannels.loadChannelsFailure))
        ))
    )
  )


  loadEntityChannel$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromEntityChannel.getEntityChannel),
      mergeMap( action => this.channelService.getChannelsByID(action.id, action.params)
        .pipe(
          map(data => FromEntityChannel.getEntityChannelSuccess({ channel: data })),
          catchError(() => of(FromEntityChannel.getEntityChannelFailure))
        )
      )
    )
  )


  constructor(
    private actions$: Actions,
    private channelService: ChannelService
  ) {

  }

}
