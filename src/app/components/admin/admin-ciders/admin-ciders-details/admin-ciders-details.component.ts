import { Component, OnInit, Input } from '@angular/core';
import { Cider } from '../../../../models/cider';
import { CiderService } from '../../../../services/cider.service';

@Component({
  selector: 'app-admin-ciders-details',
  templateUrl: './admin-ciders-details.component.html',
  styleUrls: ['./admin-ciders-details.component.css']
})
export class AdminCidersDetailsComponent implements OnInit {

  @Input() cider: Cider;

  updateIsActive: boolean = false;

  constructor(private ciderService: CiderService) { }

  ngOnInit() {
  }

  showUpdateForm() {
    this.updateIsActive = true;
  }

  deleteCider() {
    this.ciderService.deleteCider(this.cider.key);
  }

  onSubmit(key:string, updateName: string, updateImage: string, updateABV: string, updateTA: string, updateBrix: string) {
    this.updateIsActive = false;

    this.ciderService.updateCider(key, {
      name: updateName,
      image: updateImage,
      abv: updateABV,
      ta: updateTA,
      brix: updateBrix
    });
  }
}
