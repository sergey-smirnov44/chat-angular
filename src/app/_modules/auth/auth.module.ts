import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
// import { LoginComponent } from './login/login.component';
// import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { AuthReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from 'src/app/_modules/auth/pages/signup/signup.component';
import { LoginComponent } from 'src/app/_modules/auth/pages/login/login.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    StoreModule.forFeature('auth', AuthReducers, {}),
    // EffectsModule.forFeature(Effects),
    ReactiveFormsModule
  ],
})
export class AuthModule { }
