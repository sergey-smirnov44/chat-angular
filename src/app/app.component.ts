/*
 * В Angular своя система определения изменений.
 * Из-за того, что по умолчанию стоит не самая эффективная модель,
 * необходимо в Angular установить ChangeDetection: OnPush — то есть компоненты будут
 * обновляться при изменении @Input() а также изменения могут быть вызваны явно, с помощью сервиса ChangeDetectionRef.
 */
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_modules/auth/core/services/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from './_modules/auth/store/reducers'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) {
    console.log('showThis', this.showThis + '\n', 'status', this.status)
  }
  public showThis = true;
  public status = false;
  state = false
  isAuth$: Observable<boolean>

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth)
    this.authService.initAuthListener()
  }

}




