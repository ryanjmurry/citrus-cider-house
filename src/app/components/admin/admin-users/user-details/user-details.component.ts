import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from '../../../../services/user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  
  
  

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    
  }





}
