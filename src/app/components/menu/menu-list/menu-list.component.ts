import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenuItemService } from '../../../services/menu-item.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menuItems: any;

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit() {
    this.getMenuItemsList();
  }

  getMenuItemsList() {
    this.menuItemService.getMenuItemsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })) 
      )
    ).subscribe(menuItems => {
      this.menuItems = menuItems;
    });
  }
}
