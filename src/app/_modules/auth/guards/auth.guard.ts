import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/_modules/auth/core/services/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducers/index'



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

constructor(
  private router: Router,
  private authService: AuthService,
  private store: Store<fromRoot.State>
) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1))
  }

  canLoad(route: Route) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1))
  }

}
