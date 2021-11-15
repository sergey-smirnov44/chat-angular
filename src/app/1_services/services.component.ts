import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_modules/auth/core/services/auth.service';
import { Observable } from 'rxjs';
// import * as fromRoot from 'src/app/_modules/auth/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent implements OnInit {

  constructor(
    private authService: AuthService,
    // private store: Store<fromRoot.State>,
  ) { }
  isAuth$: Observable<boolean>

  ngOnInit(): void {
    // this.isAuth$ = this.store.select(fromRoot.getIsAuth)
    this.authService.initAuthListener()
  }

  exit($event: MouseEvent) {
    this.authService.SignOut()
  }
}
