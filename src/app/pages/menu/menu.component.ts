import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  authenticated: boolean;
  decodedToken: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    if (this.auth.userIsAuthenticated()) {
      const userToken = JSON.parse(localStorage.getItem('user-data'));
      this.decodedToken = this.auth.decodeToken(userToken.token);
    }
  }


}
