import { Component, Directive, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Channels } from 'src/app/core/common/2_chat-sidebar/channelsChatSidebar.interface';
import { Store } from '@ngrx/store';
import * as fromChannels from '../../store/actions/channels.actions'
import * as fromStore from '../../store/reducers'
import { ActivatedRoute, Router } from '@angular/router';

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
  ) {}

//   varr = '\'channels/\' + channel.id'
// get id(): any {return this.ac.snapshot.params[this.varr]}
  channels$: Observable<Channels[]> = this.store.select(fromStore.selectAllChannels)

  ngOnInit(): void {

    this.store.dispatch(fromChannels.loadChannels())
  }

  showChannel(id) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.router.navigate([`channels/${id}`]);

  }
}
