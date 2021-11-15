import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from '@angular/router';

import * as fromRoot from '../../../store/reducers'
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private store: Store<fromRoot.State>
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1))
  }

  canLoad(route: Route) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1))
  }
}
