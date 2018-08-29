import { Component, OnInit } from '@angular/core';
import { Cider } from '../../../../models/cider';
import { map } from 'rxjs/operators';
import { CiderService } from '../../../../services/cider.service';

@Component({
  selector: 'app-admin-ciders-create',
  templateUrl: './admin-ciders-create.component.html',
  styleUrls: ['./admin-ciders-create.component.css']
})
export class AdminCidersCreateComponent implements OnInit {

  cider: Cider = new Cider();
  ciders: any;
  submitted = false;

  constructor(private ciderService: CiderService) { }

  ngOnInit() {
    this.getCidersList();
  }

  getCidersList() {
    this.ciderService.getCidersList().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(ciders => {
      this.ciders = ciders;
    });
  }

  newCider(): void {
    this.submitted = false;
    this.cider = new Cider();
  }

  save() {
    this.ciderService.createCider(this.cider);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
