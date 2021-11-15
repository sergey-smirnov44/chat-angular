import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromMessage from 'src/app/store/reducers';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import * as fromStore from 'src/app/store/reducers';
import { ChannelService } from 'src/app/core/services/channel.service';
import * as fromEntityChannel from 'src/app/store/actions/entityChannel.actions';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(
    private store: Store<fromMessage.State>,

    private ac: ActivatedRoute,
  ) {}

  get id(): string { return this.ac.snapshot.params['id']}

  name$: Observable<string> = this.store.select(fromStore.getNameChannel)

  ngOnInit(): void {
    this.store.dispatch(fromEntityChannel.getEntityChannel({ id: this.id }))
  }

  deleteAllMessages() {
    this.store.dispatch(fromEntityChannel.clearChat({ ids: [], channelId: this.id  }))
  }
}

