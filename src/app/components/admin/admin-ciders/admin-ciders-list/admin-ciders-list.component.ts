import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CiderService } from '../../../../services/cider.service';
@Component({
  selector: 'app-admin-ciders-list',
  templateUrl: './admin-ciders-list.component.html',
  styleUrls: ['./admin-ciders-list.component.css']
})
export class AdminCidersListComponent implements OnInit {
  
  ciders: any;

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

  deleteCiders() {
    this.ciderService.deleteAll();
  }
}
