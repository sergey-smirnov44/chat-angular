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
import { UserComponent } from './4_user/user.component';
import { DeleteUserComponent } from './4_user/delete-user/delete-user.component';
import { BtnsendComponent } from './4_user/btnsend/btnsend.component';
import { AddNewFriendComponent } from './4_user/add-new-friend/add-new-friend.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { reducers } from 'src/app/store/reducers';
import { CommonModule } from '@angular/common';
import { ChannelsEffects } from 'src/app/store/effects/channels.effects';
import { FriendsEffects } from 'src/app/store/effects/friends.effects';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeComponent } from './home/home.component';

import { MatTabsModule } from '@angular/material/tabs';
import { NgpSortModule } from 'ngp-sort-pipe';
import { UsersEffects } from 'src/app/store/effects/users.effects';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/_modules/auth/core/services/auth.service';
import { AuthModule } from 'src/app/_modules/auth/auth.module';
import { AuthGuard } from 'src/app/_modules/auth/guards/auth.guard';
import { UIService } from 'src/app/_modules/auth/core/services/ui.service';
import { NewChannelDialogComponent } from './2_chat-sidebar/new-channel-dialog/new-channel-dialog.component';





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
    UserComponent,
    DeleteUserComponent,
    BtnsendComponent,
    AddNewFriendComponent,
    HomeComponent,
    NewChannelDialogComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    PickerModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    StoreModule.forRoot(reducers,  {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      },
    }),
    AuthModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ChannelsEffects, FriendsEffects, UsersEffects]),
    NgpSortModule,

  ],
  providers: [AuthService, AuthGuard, UIService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
