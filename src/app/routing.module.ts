import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ChatComponent } from 'src/app/3_chat/chat.component';
import { NgModule } from '@angular/core';


const appRoutes: Routes = [
  { path: '', component: ChatComponent },
  { path: ':id', component: ChatComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class RoutingModule {}
