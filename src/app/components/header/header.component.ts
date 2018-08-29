import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() userLogin = new EventEmitter;
  @Output() userLogout = new EventEmitter;
  @Input() isLoggedIn;

  constructor() { }
  
  ngOnInit() {
  }

  logout() {
    this.userLogout.emit();
  }

  login() {
    this.userLogin.emit();
  }
}
