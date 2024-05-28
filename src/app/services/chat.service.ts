// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ChatService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  DocumentData,
  QueryDocumentSnapshot,
  collectionData,
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private firestore: Firestore) {}

  getMessages() {
    const col = collection(this.firestore, 'chat');
    const observable = collectionData(col);
    return observable;
  }

  createMessage(message: any) {
    return addDoc(collection(this.firestore, 'chat'), message);
  }
}