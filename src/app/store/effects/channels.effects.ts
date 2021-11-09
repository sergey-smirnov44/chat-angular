import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, Observable, of, from, exhaustMap } from 'rxjs';
import { Action } from '@ngrx/store';
import { FromChannels, FromEntityChannel } from 'src/app/store/actions';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { EntityChannel } from 'src/app/core/common/2_chat-sidebar/entityChannel.interface';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';


@Injectable()
export class ChannelsEffects {

  addChannel$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromEntityChannel.createChannel),
      exhaustMap(action => from(this.fireStore.collection('channels').add(action.channel)).pipe(
        map(() => FromEntityChannel.createChannelSuccess()), catchError(() => of(FromEntityChannel.createChannelFailure))
      ))
    )
  )

  loadChannels$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromChannels.loadChannels),
      mergeMap(() => this.fireStore.collection('channels').valueChanges({ idField: 'id' })
        .pipe(
          map(data => FromChannels.loadChannelsSuccess({ channels: data as Channels[] })),
          catchError(() => of(FromChannels.loadChannelsFailure))
        ))
    )
  )

  loadEntityChannel$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromEntityChannel.getEntityChannel),
      mergeMap(action => this.fireStore.collection('channels').doc(action.id).valueChanges({ idField: 'id' })
        .pipe(
          map(data => FromEntityChannel.getEntityChannelSuccess({ channel: data as EntityChannel })),
          catchError(() => of(FromEntityChannel.getEntityChannelFailure))
        )
      )
    )
  )

  loadMessages$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromEntityChannel.getEntityChannel),
      mergeMap(action => this.fireStore.collection('channels').doc(action.id).collection('messages').valueChanges({ idField: 'id' })
        .pipe(
          map(data => FromEntityChannel.getMessageslSuccess({ messages: data as Message[] })),
          catchError(() => of(FromEntityChannel.getEntityChannelFailure))
        )
      )
    )
  )


  sendMessage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromEntityChannel.sendMessage),
      exhaustMap(action =>
        from(this.fireStore.collection('channels').doc(action.channelId).collection('messages').add(action.message))
          .pipe(
            map(() => FromEntityChannel.sendMessageSuccess(),
              catchError(() => of(FromEntityChannel.sendMessageFailure))
            )
          )
      )
    )
  )

  deleteMessage$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromEntityChannel.deleteMessage),
      exhaustMap(action =>
        from(this.fireStore.collection('channels').doc(action.channelId).collection('messages').doc(action.messageId).delete())
          .pipe(map(() => FromEntityChannel.deleteMessageSuccess(), catchError(() =>
            of(FromEntityChannel.deleteMessageFailure)))))))


  // ***************Delete Channel
  deleteChannel$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(FromEntityChannel.clearChat),
      mergeMap(action =>
        from(this.fireStore.collection('channels').get().toPromise().then(res => {
          res.forEach(elem => {elem.ref.delete()})
        })).pipe(map(() => FromEntityChannel.clearChatSuccess(), catchError(() =>
          of(FromEntityChannel.clearChatFailure)))))))

  constructor(
    private actions$: Actions,
    private fireStore: AngularFirestore,
  ) {}
}
