import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CiderService } from '../../../services/cider.service';

@Component({
  selector: 'app-cider-list',
  templateUrl: './cider-list.component.html',
  styleUrls: ['./cider-list.component.css']
})
export class CiderListComponent implements OnInit {

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
