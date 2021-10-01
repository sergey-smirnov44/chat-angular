import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServicesComponent } from './1_services/services.component';
import { ChatSidebarComponent } from './2_chat-sidebar/chat-sidebar.component';
import { FriendsComponent } from './2_chat-sidebar/friends/friends.component';
import { ChannelsComponent } from './2_chat-sidebar/channels/channels.component';
import { ChatComponent } from './3_chat/chat.component';
import { SearchComponent } from './3_chat/search/search.component';
import { MessagesListComponent } from './3_chat/messages-list/messages-list.component';
import { MessageComponent } from './3_chat/messages-list/message/message.component';
import { FieldSendMessageComponent } from './3_chat/field-send-message/field-send-message.component';
import { TextareaComponent } from './3_chat/field-send-message/textarea/textarea.component';
import { UserComponent } from './4_user/user.component';
import { DeleteUserComponent } from './4_user/delete-user/delete-user.component';
import { BtnsendComponent } from './4_user/btnsend/btnsend.component';
import { AddNewFriendComponent } from './4_user/add-new-friend/add-new-friend.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconRegistry } from '@angular/material/icon';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';



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
    NgbModule,
    PickerModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({}, {})

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
