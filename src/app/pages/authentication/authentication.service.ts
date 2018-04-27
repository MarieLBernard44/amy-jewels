import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import * as jwtDecode from 'jwt-decode';



@Injectable()

export class AuthenticationService {

  BASE_URL = 'http://localhost:4201/auth';

  constructor(private http: Http) { }

login(credentials) {
  return this.http.post(this.BASE_URL + '/login', credentials)
                  .map(res => res.json());
}

userIsAuthenticated() {
  return localStorage.getItem('user-data');
}

logout() {
  localStorage.removeItem('user-data');
}

register(credentials) {
  return this.http.post(this.BASE_URL + '/register', credentials)
                  .map(res => res.json());
}

decodeToken(token) {
  return jwtDecode(token);
}

}
