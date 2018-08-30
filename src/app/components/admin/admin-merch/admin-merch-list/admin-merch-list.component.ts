import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MerchItemService } from '../../../../services/merch-item.service';

@Component({
  selector: 'app-admin-merch-list',
  templateUrl: './admin-merch-list.component.html',
  styleUrls: ['./admin-merch-list.component.css']
})
export class AdminMerchListComponent implements OnInit {
 
  merchItems: any;

  constructor(private merchItemService: MerchItemService) { }

  ngOnInit() {
    this.getMerchItemsList();
  }

  getMerchItemsList() {
    this.merchItemService.getMerchItemsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })) 
      )
    ).subscribe(merchItems => {
      this.merchItems = merchItems;
    });
  }

  deleteMerchItems() {
    this.merchItemService.deleteAll();
  }
}