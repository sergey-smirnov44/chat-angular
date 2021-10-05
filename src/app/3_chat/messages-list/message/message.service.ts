import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService{

  // private url = 'https://github.com/sergey-smirnov44/chat-angular/blob/master/src/assets/data.json'

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('/assets/data.json')
  }
}
