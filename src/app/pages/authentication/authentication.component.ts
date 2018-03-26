import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  login(formData) {
    this.auth.login(formData)
             .subscribe(
               data => this.handleLoginSuccess,
               error => this.handleLoginFailure
             );
  }

  handleLoginSuccess(data) {
    console.log('success', data);
  }

  handleLoginFailure(error) {
    console.log('failure', error);
  }

}
