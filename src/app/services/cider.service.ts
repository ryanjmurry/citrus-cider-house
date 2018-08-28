import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Cider } from '../models/cider';

@Injectable({
  providedIn: 'root'
})
export class CiderService {

  private dbPath = '/ciders'

  cidersRef: AngularFireList<Cider> = null;

  constructor(private db: AngularFireDatabase) { 
    this.cidersRef = db.list(this.dbPath);
  }

  createCider(cider: Cider): void {
    this.cidersRef.push(cider);
  }

  updateCider(key: string, value: any): void {
    this.cidersRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteCider(key: string): void {
    this.cidersRef.remove(key).catch(error => this.handleError(error));
  }

  getCidersList(): AngularFireList<Cider> {
    return this.cidersRef;
  }

  deleteAll(): void {
    this.cidersRef.remove().catch(error => this.handleError(error));
  }

  

  private handleError(error) {
    console.log(error);
  }
}
