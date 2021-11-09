import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as Auth from '../../store/actions/auth.actions'
import * as fromRoot from '../../store/reducers/index'
import { Login } from 'src/app/_modules/auth/core/models/login.model';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { FromLoading } from '../../store/actions'
import { UIService } from 'src/app/_modules/auth/core/services/ui.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app/core/common/4_user/user.interface';



@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private store: Store<fromRoot.State>,
    private uiService: UIService,
    private firestore: AngularFirestore,
  ) {}

  registerUser(authData: User) {
    this.store.dispatch(FromLoading.START_LOADING())
    this.afAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(cred => {
      // this.store.select(fromRoot.getUserName).subscribe(username => {
      //   console.log('username: ', username)
      //   if (username) {
      console.log(authData.username)
          this.firestore.collection('users').doc(cred.user.uid).set(
            {
              name: authData.name,
              username: authData.username,
              password: authData.password,
              email: authData.email,
              profession: authData.profession,
              skype: authData.skype,
              photo: authData.photo
        //     })
        //   console.log(cred.user.uid)
        // }
      })
    }).then(() => this.store.dispatch(FromLoading.STOP_LOADING())).catch(
      error => {
        this.store.dispatch(FromLoading.STOP_LOADING())
        this.uiService.showSnackbar(error.message, error, 5000)
        console.log(error.message)
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
