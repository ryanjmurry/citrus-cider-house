import { Component, OnInit, Input } from '@angular/core';
import { MerchItem } from '../../../../models/merch-item';
import { MerchItemService } from '../../../../services/merch-item.service';

@Component({
  selector: 'app-admin-merch-details',
  templateUrl: './admin-merch-details.component.html',
  styleUrls: ['./admin-merch-details.component.css']
})
export class AdminMerchDetailsComponent implements OnInit {

  @Input() merchItem: MerchItem;

  updateIsActive: boolean = false;

  constructor(private merchItemService: MerchItemService) { }

  ngOnInit() {
  }

  showUpdateForm() {
    this.updateIsActive = true;
  }

  deleteMerchItem() {
    this.merchItemService.deleteMerchItem(this.merchItem.key);
  }

  onSubmit(key: string, updateName: string, updatePrice: string, updateDescription) {
    this.updateIsActive = false;

    this.merchItemService.updateMerchItem(key, {
      name: updateName,
      price: updatePrice,
      description: updateDescription
    });
  }
}