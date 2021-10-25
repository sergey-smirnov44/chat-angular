import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { style } from '@angular/animations';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/core/common/4_user/user.interface';
import * as fromStore from '../store/reducers'
import { Store } from '@ngrx/store';
import * as fromUser from  '../store/actions/user.actions'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  public showThis = false;
  public buttonName = 'Show';

  dest: Subscription

  constructor(
    private router: Router,
    private store: Store<fromStore.State>
  ) {}

  users$: Observable<User[]> = this.store.select(fromStore.selectUser)

  ngOnInit(): void {
    this.dest = this.users$.subscribe(x => console.log(x))
    console.log(this.dest)

  }




  ngOnDestroy() {
    this.dest.unsubscribe()
  }
}
