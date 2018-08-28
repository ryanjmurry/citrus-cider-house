import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MenuItem } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private dbPath = '/menu'

  menuItemsRef: AngularFireList<MenuItem> = null;

  constructor(private db: AngularFireDatabase) { 
    this.menuItemsRef = db.list(this.dbPath);
  }

  createMenuItem(menuItem: MenuItem): void {
    this.menuItemsRef.push(menuItem);
  }

  updateMenuItem(key: string, value: any): void {
    this.menuItemsRef.update(key, value).catch(error => this.handleError(error));
  }

  deleteMenuItem(key: string): void {
    this.menuItemsRef.remove(key).catch(error => this.handleError(error));
  }

  getMenuItemsList(): AngularFireList<MenuItem> {
    return this.menuItemsRef;
  }

  deleteAll(): void {
    this.menuItemsRef.remove().catch(error => this.handleError(error));
  }

  

  private handleError(error) {
    console.log(error);
  }
}
