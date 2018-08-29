import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from '../../../services/user-data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user;
  
  checked: boolean;

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.checked = this.user.roles.admin;
  }

  toggleAdmin(uid: string) {
    if(this.user.roles.admin) {
      this.userDataService.removeAdminRole(uid);
    } else {
      this.userDataService.giveAdminRole(uid);
    }
  }



}
