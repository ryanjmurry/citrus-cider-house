import { Component, OnInit, Input } from '@angular/core';
import { Cider } from '../../../models/cider';
import { CiderService } from '../../../services/cider.service';

@Component({
  selector: 'app-cider-details',
  templateUrl: './cider-details.component.html',
  styleUrls: ['./cider-details.component.css']
})
export class CiderDetailsComponent implements OnInit {

  @Input() cider: Cider;

  constructor(private ciderService: CiderService) { }

  ngOnInit() {
  }

  // updateCider() {

  // }

  deleteCider() {
    this.ciderService.deleteCider(this.cider.key);
  }

}
