import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
// import { LoginComponent } from './login/login.component';
// import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from 'src/app/_modules/auth/pages/signup/signup.component';
import { LoginComponent } from 'src/app/_modules/auth/pages/login/login.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    StoreModule.forFeature('auth', reducers, {}),
    // EffectsModule.forFeature(Effects),
    ReactiveFormsModule,
    MaterialModule
  ],
})
export class AuthModule { }
