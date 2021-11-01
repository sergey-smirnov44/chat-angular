import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as Auth from '../../store/actions/auth.actions'
import * as fromRoot from '../../store/reducers/index'
import { Login } from 'src/app/_modules/auth/core/models/login.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as LoadingAction from '../../store/actions/loading.actions'
import { UIService } from 'src/app/_modules/auth/core/services/ui.service';


@Injectable()
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private afAuth: AngularFireAuth,
    private router: Router,
    private store: Store<fromRoot.State>,
    private uiService: UIService
  ) {}

  registerUser(authData: Login) {
    this.store.dispatch(LoadingAction.START_LOADING())
    this.afAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(() =>
      this.store.dispatch(LoadingAction.STOP_LOADING())
    ).catch(
      error => {
        this.store.dispatch(LoadingAction.STOP_LOADING())
        this.uiService.showSnackbar(error.message, error, 3000)
      }
    )
  }

  // checkAuth(): Observable<firebase.User | null> {
  //   return this.auth.authState
  // }
  //
  // async signInWithGoogle(): Promise<firebase.User> {
  //   const provider = new firebase.auth.GoogleAuthProvider()
  // }


  // login(authData: AuthData) {
  //   this.afAuth.signInWithEmailAndPassword(authData.email, authData.password).then(
  //     () => {
  //       // this.
  //     }
  //   )
  // }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(Auth.SET_AUTHENTICATED())
        this.router.navigate(['/channels/1'])
      } else {
        this.store.dispatch(Auth.SET_UNAUTHENTICATED())
        this.router.navigate(['/auth/login'])
      }
    })
  }



  SignOut() {
    this.afAuth.signOut()
  }

}
