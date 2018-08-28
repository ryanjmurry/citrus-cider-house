import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cider } from '../../../models/cider';
import { CiderService } from '../../../services/cider.service';

@Component({
  selector: 'app-cider-create',
  templateUrl: './cider-create.component.html',
  styleUrls: ['./cider-create.component.css']
})
export class CiderCreateComponent implements OnInit {

  cider: Cider = new Cider();
  submitted = false;

  constructor(private ciderService: CiderService) { }

  ngOnInit() {
  }

  newCider(): void {
    this.submitted = false;
    this.cider = new Cider();
  }

  save() {
    this.ciderService.createCider(this.cider);
    this.cider = new Cider();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
