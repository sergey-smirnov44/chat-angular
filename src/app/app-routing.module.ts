import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthGuard } from 'src/app/_modules/auth/guards/auth.guard';
import { SignupComponent } from 'src/app/_modules/auth/pages/signup/signup.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'auth',
    loadChildren: () => import('./_modules/auth/auth.module').then((mod) => mod.AuthModule)
  },
  {
    path: 'channels',
    loadChildren: () => import('./3_chat/chat.module').then(m => m.ChatModule),
    // canActivate: [AuthGuard]
  },
  // {
  //   path: '**',
  //   redirectTo: '/auth/login'
  // }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
