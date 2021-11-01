import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/_modules/auth/core/services/auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers/loading.reducer'

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {
  isLoading$: Observable<boolean>

  constructor(public authService: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading)
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    })
  }

}
