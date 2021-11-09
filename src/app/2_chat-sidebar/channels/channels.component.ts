import { Component, Directive, OnDestroy, OnInit } from '@angular/core';
import { map, mergeMap, Observable, of, Subscription, take } from 'rxjs';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Store } from '@ngrx/store';
import * as fromChannels from '../../store/actions/channels.actions'
import * as fromStore from '../../store/reducers'
import { ActivatedRoute, Router } from '@angular/router';
import * as fromUI from '../../_modules/auth/store/reducers/index'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { log } from 'util';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewChannelDialogComponent } from 'src/app/2_chat-sidebar/new-channel-dialog/new-channel-dialog.component';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<fromStore.State>,
    private router: Router,
    private ac: ActivatedRoute,
    private firestore: AngularFirestore,
    private dialog: MatDialog
  ) {}

  isLoading$: Observable<boolean>
  channels$: Observable<Channels[]> = this.store.select(fromStore.selectAllChannels)
  countChan: Subscription
  countChannels$: Observable<any> = this.firestore.collection('channels').valueChanges()


  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromUI.getIsLoading)
    this.store.dispatch(fromChannels.loadChannels())
    this.countChan = this.countChannels$.pipe(map(a => a.length)).subscribe((res) => {this.countChannels$ = of(res)})
  }

  showChannel(id) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.navigate([`channels/${ id }`]);
  }

  createChannel() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(NewChannelDialogComponent, dialogConfig)
  }

  ngOnDestroy() {
    if (this.countChan) {
      this.countChan.unsubscribe()
    }

  }
}
