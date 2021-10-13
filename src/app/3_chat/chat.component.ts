import { Component, OnInit, ViewChild } from '@angular/core';
import { clearChat, clearChatSuccess } from 'src/app/store/actions/message.actions';
import { Store } from '@ngrx/store';
import * as fromMessage from 'src/app/store/reducers';
import { Observable, Subscription } from 'rxjs';
import { ChatSidebarService } from 'src/app/core/services/chat-sidebar.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { EntityChannel } from 'src/app/core/common/2_chat-sidebar/entityChannel.interface';
import * as fromStore from 'src/app/store/reducers';
import { ChannelService } from 'src/app/core/services/channel.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  get id(): any { return this.ac.snapshot.params.id }

  nameChannel$: Observable<EntityChannel[]> = this.store.select(fromStore.selectEntityChannel)

  constructor(
    private store: Store<fromMessage.State>,
    private chatService: ChannelService,
    private ac: ActivatedRoute
  ) {
    console.log(this.nameChannel$, 'nameChannel')
    console.log(this.ac.snapshot, 1289)
  }

  private subscription: Subscription



  // ch = this.subscription.this.ac.params.subscribe(params => this.id = params['id']);


  ngOnInit(): void {
    // this.ac.paramMap.subscribe((params: ParamMap) => {
    //   this.id = +params.get('id');
    //   this.name = +params.get('name')
    //   console.log(params)
    // })
    // console.log(this.loadChannel(), 82138123)
    // this.loadChannel()
  }
  //
  // loadChannel(): void {
  //   this.store.dispatch(FromEntityChannel.getEntityChannel({
  //     id: this.id,
  //     params: {
  //       id: this.id,
  //       name: this.name,
  //       message: []
  //     }
  //   }))
  // }


  showChat(id) {
    this.chatService.getChannelsByID(id)
  }


  deleteAllMessages() {
    this.store.dispatch(clearChat({ ids: [] }))
  }

}
