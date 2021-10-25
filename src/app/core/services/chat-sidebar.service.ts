import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Friends } from 'src/app/core/common/2_chat-sidebar/friendsChatSideBar.interface';
import { Store } from '@ngrx/store';
import * as fromMessage from 'src/app/store/reducers'
import { User } from 'src/app/core/common/4_user/user.interface';


@Injectable({
  providedIn: 'root'
})
export class ChatSidebarService {

  baseUrl = 'http://localhost:3000/'

  constructor(
    private store: Store<fromMessage.State>,
    private http: HttpClient
  ) {}

  public getFriendsList(): Observable<Friends[]> {
    return this.http.get<Friends[]>(this.baseUrl + 'users/')
  }

  public getUserById(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id)
  }

  public deleteFriendsById(id): Observable<User> {
    return this.http.put<User>(this.baseUrl + 'users/' + id, { friend: 'false' })
  }

  public addFriendsById(id): Observable<User> {
    return this.http.put<User>(this.baseUrl + 'users/' + id, { friend: 'true' })
  }
}
