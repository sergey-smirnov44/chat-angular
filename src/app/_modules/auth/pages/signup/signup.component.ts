import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/_modules/auth/core/services/auth.service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from 'src/app/store/reducers/loading.reducer'
import { ErrorStateMatcher } from '@angular/material/core';
import { User } from 'src/app/core/common/4_user/user.interface';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SignupComponent implements OnInit {
  isLoading$: Observable<boolean>
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  urlPhoto: any;


  constructor(public authService: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    // this.isLoading$ = this.store.select(fromRoot.getIsLoading)
  }

  onSubmit(form: NgForm) {
    if (form) {
      const newUserSignUp: User = {
        name: form.value.name,
        username: form.value.username,
        password: form.value.password,
        email: form.value.email,
        profession: form.value.profession,
        skype: form.value.skype,
        photo: form.value.photo
      }
      // this.store.dispatch(FromAuth.createNewUser({newUser: newUserSignUp}))
    }

    this.authService.registerUser({
      name: form.value.name,
      username: form.value.username,
      password: form.value.password,
      email: form.value.email,
      profession: form.value.profession,
      skype: form.value.skype,
      photo: form.value.photo
    })

  }

}
