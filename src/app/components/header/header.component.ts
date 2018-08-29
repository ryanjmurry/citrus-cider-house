import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() userLogin = new EventEmitter;
  @Output() userLogout = new EventEmitter;
  @Input() isLoggedIn;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  clicked: number = 0;

  startGame(){
    if (this.clicked === 7) {
      this.route.navigate(['lemonparty'])
    } else {
      this.clicked ++
    }
  }

  logout() {
    this.userLogout.emit();
  }

  login() {
    this.userLogin.emit();
  }

}
