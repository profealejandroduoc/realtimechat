import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  private chatRef = this.db.list('chat');

  constructor(private db: AngularFireDatabase) { }
  
  getMessages(): Observable<any[]> {
    return this.chatRef.valueChanges();
  }

  sendMessage(user: string, message: string): void {
    const timestamp = new Date().getTime();
    this.chatRef.push({ user, message, timestamp });
  }
}
