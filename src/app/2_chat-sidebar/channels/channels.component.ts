import { Component, Directive, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Store } from '@ngrx/store';
import * as fromChannels from '../../store/actions/channels.actions'
import * as fromStore from '../../store/reducers'
import { ActivatedRoute, Router } from '@angular/router';
import * as fromUI from '../../_modules/auth/store/reducers/index'

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  constructor(
    private store: Store<fromStore.State>,
    private router: Router,
    private ac: ActivatedRoute,

  ) {}

  isLoading$: Observable<boolean>
  channels$: Observable<Channels[]> = this.store.select(fromStore.selectAllChannels)

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromUI.getIsLoading)
    this.store.dispatch(fromChannels.loadChannels())
  }

  showChannel(id) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.navigate([`channels/${id}`]);

  }
}
