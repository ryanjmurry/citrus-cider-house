import { Component, OnInit } from '@angular/core';
import { MerchItem } from '../../../../models/merch-item';
import { MerchItemService } from '../../../../services/merch-item.service';


@Component({
  selector: 'app-admin-merch-create',
  templateUrl: './admin-merch-create.component.html',
  styleUrls: ['./admin-merch-create.component.css']
})
export class AdminMerchCreateComponent implements OnInit {

  merchItem: MerchItem = new MerchItem();
  submitted = false;

  constructor(private merchItemService: MerchItemService) { }

  ngOnInit() {
  }

  newMerchItem(): void {
    this.submitted = false;
    this.merchItem = new MerchItem();
  }

  save() {
    this.merchItemService.createMerchItem(this.merchItem);
    this.merchItem = new MerchItem();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
