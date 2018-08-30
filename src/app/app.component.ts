import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user;
  isLoggedIn: Boolean;
  userName: String;

  constructor(public authService: AuthService) {
    this.authService.user.subscribe(user => {
      if (user == null) {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  login() {
    this.authService.googleLogin();
  }

  logout() {
    this.authService.signOut();
  }
}
