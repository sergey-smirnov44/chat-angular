import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Channel } from 'src/app/core/common/3_chat/channelChat.interface';
import * as fromStore from '../../store/reducers'
import { Store } from '@ngrx/store';
import { FromEntityChannel } from 'src/app/store/actions';
import { EntityChannel } from 'src/app/core/common/2_chat-sidebar/entityChannel.interface';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-new-channel-dialog',
  templateUrl: './new-channel-dialog.component.html',
  styleUrls: ['./new-channel-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewChannelDialogComponent implements OnInit {
  newChannel: string;

  constructor(
    private store: Store<fromStore.State>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  zaebic() {
    console.log('zaebic')
  }

  createChannel() {
    if (this.newChannel) {
      const newCh: EntityChannel = {
        name: this.newChannel
      }
      this.store.dispatch(FromEntityChannel.createChannel({channel: newCh}))
      this.newChannel = ''
      this.dialog.closeAll()
    }
  }
}
