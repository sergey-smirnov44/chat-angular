import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, switchMap } from 'rxjs';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Store } from '@ngrx/store';
import * as fromChannels from '../../store/actions/channels.actions'
import * as fromEntityChannel from '../../store/actions/entityChannel.actions'
import * as fromStore from '../../store/reducers'
import { ChannelService } from 'src/app/core/services/channel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityChannel } from 'src/app/core/common/2_chat-sidebar/entityChannel.interface';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  constructor(
    private store: Store<fromStore.State>,
    private router: Router,
    private ac: ActivatedRoute
  ) { }

  channels$: Observable<Channels[]> = this.store.select(fromStore.selectAllChannels)

  ngOnInit(): void {
    this.store.dispatch(fromChannels.loadChannels())
  }

  showChannel(id) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.navigate([id]);
  }
}
