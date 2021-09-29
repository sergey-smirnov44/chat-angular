import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServicesComponent } from './services/services.component';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { FriendsComponent } from './chat-sidebar/friends/friends.component';
import { ChannelsComponent } from './chat-sidebar/channels/channels.component';
import { ChatComponent } from './chat/chat.component';
import { SearchComponent } from './chat/search/search.component';
import { MessagesListComponent } from './chat/messages-list/messages-list.component';
import { MessageComponent } from './chat/messages-list/message/message.component';
import { FieldSendMessageComponent } from './chat/field-send-message/field-send-message.component';
import { TextareaComponent } from './chat/field-send-message/textarea/textarea.component';
import { EmojiComponent } from './chat/field-send-message/textarea/emoji/emoji.component';
import { UserComponent } from './user/user.component';
import { DeleteUserComponent } from './user/delete-user/delete-user.component';
import { BtnsendComponent } from './user/btnsend/btnsend.component';
import { AddNewFriendComponent } from './user/add-new-friend/add-new-friend.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ChatSidebarComponent,
    ChannelsComponent,
    FriendsComponent,
    ChatComponent,
    SearchComponent,
    MessagesListComponent,
    MessageComponent,
    FieldSendMessageComponent,
    TextareaComponent,
    EmojiComponent,
    UserComponent,
    DeleteUserComponent,
    BtnsendComponent,
    AddNewFriendComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
