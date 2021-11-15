import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/_modules/auth/core/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import * as fromRoot from 'src/app/store/reducers'
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  isLoading$: Observable<boolean>
  name = new FormControl('123');
  constructor(private authService: AuthService, private store: Store<fromRoot.State>, private router: Router) {
    this.loginForm = new FormGroup({
      userLogin: new FormControl('', [
        Validators.required,
      ]),
      userPassword: new FormControl('', [
        Validators.required,
      ]),
    })
  }


  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading)
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.value.userLogin,
      password: this.loginForm.value.userPassword
    })
  }



}
