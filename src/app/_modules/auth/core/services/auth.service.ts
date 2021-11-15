import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as Auth from '../../store/actions/auth.actions'
import * as fromRoot from '../../../../store/reducers'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FromLoading } from 'src/app/store/actions'
import { UIService } from 'src/app/_modules/auth/core/services/ui.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from 'src/app/core/common/4_user/user.interface';
import * as loadingAction from 'src/app/store/actions/loading.actions'


@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private store: Store<fromRoot.State>,
    private uiService: UIService,
    private firestore: AngularFirestore,
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (auth == null) {console.log(`Пользователь вышел`)} else {console.log(`${auth.email} зашел`, auth)}
    })
  }

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

  login(authData: User) {
    // this.uiService.loadingStateChanged.next(true)
    this.store.dispatch(FromLoading.START_LOADING())
    this.afAuth.signInWithEmailAndPassword(
      authData.email,
      authData.password
    ).then(result => {
      // this.uiService.loadingStateChanged.next(false)
      this.store.dispatch(FromLoading.STOP_LOADING())

    }).catch(error => {
      // this.uiService.loadingStateChanged.next(false)
      this.store.dispatch(FromLoading.STOP_LOADING())
      this.uiService.showSnackbar(console.log(error.message), null, 3000)
    })
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user && user.uid) {
        this.store.dispatch(Auth.setAuthenticated())
        this.router.navigate(['/home'])
      } else {
        this.store.dispatch(Auth.setUnAuthenticated())
        this.router.navigate(['/login'])
      }
    })
  }


  SignOut() {
    this.afAuth.signOut()
  }

}
