import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { Service } from 'src/app/3_chat/messages-list/message/message.service';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { FromChatSideBar } from 'src/app/store/actions';
import { Action } from '@ngrx/store';
import { ChatSidebarService } from 'src/app/2_chat-sidebar/chat-sidebar.service';


@Injectable()
export class ChatSidebarEffectsEffects {

  loadChannels$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromChatSideBar.loadChannels),
      mergeMap(() => this.chatSidebarService.getChannels()
        .pipe(
          map(data => FromChatSideBar.loadChannelsSuccess({ channels: data })),
          catchError(() => of(FromChatSideBar.loadChannelsFailure))
        ))
    )
  )




  constructor(
    private actions$: Actions,
    private chatSidebarService: ChatSidebarService
  ) {

  }

}
