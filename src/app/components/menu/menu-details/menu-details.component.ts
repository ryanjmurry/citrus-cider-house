import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../../models/menu-item';
import { MenuItemService } from '../../../services/menu-item.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  @Input() menuItem: MenuItem;

  updateIsActive: boolean = false;

  constructor(private menuItemService: MenuItemService) { }

  ngOnInit() {
  }

  showUpdateForm() {
    this.updateIsActive = true;
  }

  deleteMenuItem() {
    this.menuItemService.deleteMenuItem(this.menuItem.key);
  }

  onSubmit(key: string, updateName: string, updatePrice: string, updateDescription) {
    this.updateIsActive = false;

    this.menuItemService.updateMenuItem(key, {
      name: updateName,
      price: updatePrice,
      description: updateDescription
    });
  }

}
