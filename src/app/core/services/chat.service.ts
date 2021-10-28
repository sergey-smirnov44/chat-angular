import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


export class ChatService {
  constructor(
    private db: AngularFirestore,

  ) {}
}
