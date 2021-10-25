import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Store } from '@ngrx/store';
import * as fromChannels from '../../store/actions/channels.actions'
import * as fromStore from '../../store/reducers'
import { Router } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  constructor(
    private store: Store<fromStore.State>,
    private router: Router,
  ) {}

  channels$: Observable<Channels[]> = this.store.select(fromStore.selectAllChannels)

  ngOnInit(): void {
    this.store.dispatch(fromChannels.loadChannels())
  }

  showChannel(id) {
    console.clear()
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.navigate([id]);
  }
}
