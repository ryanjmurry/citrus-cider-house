import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../models/menu-item';
import { MenuItemService } from '../../../services/menu-item.service';

@Component({
  selector: 'app-menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.css']
})
export class MenuCreateComponent implements OnInit {

  menuItem: MenuItem = new MenuItem();
  submitted = false;

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit() {
  }

  newMenuItem(): void {
    this.submitted = false;
    this.menuItem = new MenuItem();
  }

  save() {
    this.menuItemService.createMenuItem(this.menuItem);
    this.menuItem = new MenuItem();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
