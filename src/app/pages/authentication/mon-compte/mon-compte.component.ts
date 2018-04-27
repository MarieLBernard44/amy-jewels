import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.css']
})
export class MonCompteComponent implements OnInit {

  decodedToken: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    if (this.auth.userIsAuthenticated()) {
      const userToken = JSON.parse(localStorage.getItem('user-data'));
      this.decodedToken = this.auth.decodeToken(userToken.token);
      console.log(this.decodedToken);
    }
  }

}
