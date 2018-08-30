import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MerchItem } from '../models/merch-item';

@Injectable({
  providedIn: 'root'
})
export class MerchItemService {

  private dbPath = '/merch'

  merchItemsRef: AngularFireList<MerchItem> = null;

  constructor(private db: AngularFireDatabase) { 
    this.merchItemsRef = db.list(this.dbPath);
  }

  createMerchItem(merchItem: MerchItem): void {
    this.merchItemsRef.push(merchItem);
  }

  updateMerchItem(key: string, value: any): void {
    this.merchItemsRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteMerchItem(key: string): void {
    this.merchItemsRef.remove(key).catch(error => this.handleError(error));
  }

  getMerchItemsList(): AngularFireList<MerchItem> {
    return this.merchItemsRef;
  }

  deleteAll(): void {
    this.merchItemsRef.remove().catch(error => this.handleError(error));
  }
  
  private handleError(error) {
    console.log(error);
  }
}
