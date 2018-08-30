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
  
  constructor(private menuItemService: MenuItemService) { }

  ngOnInit() {
  }
}
