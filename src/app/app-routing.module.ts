import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthGuard } from 'src/app/_modules/auth/guards/auth.guard';
import { SignupComponent } from 'src/app/_modules/auth/pages/signup/signup.component';
import { MyProfileComponent } from 'src/app/_modules/my-profile/my-profile.component';
import { LoginComponent } from 'src/app/_modules/auth/pages/login/login.component';
import { AuthService } from 'src/app/_modules/auth/core/services/auth.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, canLoad: [AuthGuard] },

  {
    path: 'my-profile',
    component: MyProfileComponent,
    canLoad: [AuthGuard]
  },
  {
    path: 'channels',
    loadChildren: () => import('./3_chat/chat.module').then(m => m.ChatModule),
    canLoad: [AuthGuard]
  },
  // {
  //   path: '**',
  //   redirectTo: '/auth/login'
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService]
})

export class AppRoutingModule {
}
