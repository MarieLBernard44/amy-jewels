import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  userData: string;
  formConnexion: FormGroup;
  msgErrLogin: string; /*message d'erreur si le login n'est pas valide */
  msgErrPassword: string; /*message d'erreur si le mdp n'est pas valide */

  constructor(
    private auth: AuthenticationService,
    private fb: FormBuilder) {
    this.userData = '';
   }

  ngOnInit() {
    this.validFormConnexion();
  }

  validFormConnexion() {
      this.formConnexion = this.fb.group({
        email: ['', Validators.compose([Validators.required,
          Validators.pattern('^[a-z0-9._-]+@[a-z0-9._-]{2,}[.]{1}[a-z]{2,4}$')])],
        password: ['', Validators.compose ([Validators.required,
          Validators.pattern( '[a-zA-Z0-9éèàç,;:.!?\'()\\s]*')])],
  });

  }

  login(formData) {
    this.auth.login(formData)
             .subscribe(
               data => this.handleLoginSuccess(data),
               error => this.handleLoginFailure(error)
             );
  }

  handleLoginSuccess(data) {
    console.log('success', data);
    this.userData = data;
    localStorage.setItem('user-data', JSON.stringify(data));
  }

  handleLoginFailure(error) {
    console.log('failure', error);
  }

    // Fonction de Validation du Login avec message d'erreurs
    validLogin() {
      if (this.formConnexion.controls['email'].hasError('required')) {
        this.msgErrLogin = 'Un email est obligatoire !';
      } else if (this.formConnexion.controls['email'].hasError('pattern')) {
        this.msgErrLogin = 'Veuillez saisir une adresse mail valide !';
      }
    }
    cleanLogin() {
      this.msgErrLogin = '';
    }

    // Fonction de Validation du mdp avec message d'erreurs
    validPassword() {
      if (this.formConnexion.controls['password'].hasError('required')) {
        this.msgErrPassword = 'Un mot de passe est obligatoire !';
      } else if (this.formConnexion.controls['password'].hasError('pattern')) {
        this.msgErrPassword = 'Veuillez saisir un mot de passe valide !';
      }
    }
    cleanPassword() {
      this.msgErrPassword = '';
    }

}
