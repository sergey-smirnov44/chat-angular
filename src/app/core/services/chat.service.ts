import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from 'src/app/core/common/3_chat/messageChat.interface';


export class ChatService {
  constructor(
    private db: AngularFirestore,

  ) {}

  sendMessage( name, photo, text, date) {
    const id = this.db.createId()
    const message: Message = { id, name, text: undefined }
  }
}
