import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private afs: AngularFirestore) {
  }

  getAllUsers() {
    return this.afs.collection('users').snapshotChanges();
  }

  getUser(uid: string) {
    return this.afs.collection('users').doc(uid).snapshotChanges();
  }

  giveAdminRole(uid: string) {
    return this.afs.collection('users').doc(uid).update({ roles: { admin: true, customer: true } });
  }

  removeAdminRole(uid: string) {
    return this.afs.collection('users').doc(uid).update({ roles: { admin: false, customer: true } });
  }


}
