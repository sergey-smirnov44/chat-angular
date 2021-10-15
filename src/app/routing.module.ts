import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from 'src/app/3_chat/chat.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':id', component: ChatComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'ignore'})],
  exports: [RouterModule]
})

export class RoutingModule {}
