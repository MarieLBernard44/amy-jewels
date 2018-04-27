import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formCreateAccount: FormGroup;
  msgErrConfirmMdp: string;
  msgErrMdp: string;
  msgErrNom: string;
  msgErrEmail: string;
  msgErrPrenom: string;
  msgErrAddress: string;
  msgErrZipCode: string;
  msgErrVille: string;
  msgErrTelFixe: string;
  msgErrTelPortable: string;
  msgErrDateNaiss: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.validFormCreateAccount();
  }

  validFormCreateAccount() {
    this.formCreateAccount = this.fb.group({
      email: ['', Validators.compose([Validators.required,
        Validators.pattern('^[a-z0-9._-]+@[a-z0-9._-]{2,}[.]{1}[a-z]{2,4}$')])],
      mdp: ['', Validators.required],
      confirmMdp: ['', Validators.required],
      civilite: [''],
      nom: ['', Validators.compose([Validators.required,
        Validators.pattern('[a-zA-ZÀ-ÿ\\s]{1,25}'),
        Validators.minLength(2),
        Validators.maxLength(20)])],
      prenom: ['', Validators.compose([Validators.required,
        Validators.pattern('^[a-zA-ZéèîïÉÈÎÏ][a-zA-ZéèîïÉÈÎÏ]+([-\' ]?[a-zA-ZéèîïÉÈÎÏ][a-zA-ZéèîïÉÈÎÏ]+)'),
        Validators.minLength(2),
        Validators.maxLength(20)])],
      address: ['', Validators.required],
      complementAddress: [''],
      zipCode: ['', Validators.compose([Validators.required,
      Validators.pattern('[0-9]{5}')])],
      ville: ['', Validators.required],
      telFixe: ['', Validators.pattern('^0[1-58-9]([-. ]?[0-9]{2}){4}$')],
      telPortable: ['', Validators.pattern('^0[6-7]([-. ]?[0-9]{2}){4}$')],
      // tslint:disable-next-line:max-line-length
      dateNaiss: ['']
    });
  }

  register(formData) {
    this.auth.register(formData)
             .subscribe(
               data => this.handleRegisterSuccess(data),
               error => this.handleRegisterFailure(error)
             );
  }

  handleRegisterSuccess(data) {
    console.log('success', data);
    this.router.navigate(['/page/home']);
  }

  handleRegisterFailure(error) {
    console.log('Compte impossible à créer! ');
    console.error('failure', error);
  }


  /******************* VALIDATION DES CHAMPS DU FORMULAIRE *******************/
  // Fonction de Validation de l'email avec message d'erreurs
  validEmail() {
    if (this.formCreateAccount.controls['email'].hasError('required')) {
      this.msgErrEmail = 'Veuillez renseigner une adresse mail';
    } else if (this.formCreateAccount.controls['email'].hasError('pattern')) {
      this.msgErrEmail = 'Veuillez saisir une adresse mail valide';
    }
  }
  cleanEmail() {
    this.msgErrEmail = '';
  }

  // Fonction de Validation de l'email avec message d'erreurs
  validMdp() {
    if (this.formCreateAccount.controls['email'].hasError('required')) {
      this.msgErrMdp = 'Veuillez renseigner un mot de passe';
    }
  }
  cleanMdp() {
    this.msgErrMdp = '';
  }

  // Fonction de Validation de l'email avec message d'erreurs
  validConfirmMdp() {
    if (this.formCreateAccount.controls['email'].hasError('required')) {
      this.msgErrConfirmMdp = 'Veuillez confirmer votre mot de passe';
    }
  }
  cleanConfirmMdp() {
    this.msgErrConfirmMdp = '';
  }

  // Fonction de Validation de l'email avec message d'erreurs
  validNom() {
    if (this.formCreateAccount.controls['nom'].hasError('required')) {
      this.msgErrNom = 'Veuillez renseigner un nom';
    } else if (this.formCreateAccount.controls['nom'].hasError('pattern')) {
      this.msgErrNom = 'Veuillez saisir un nom valide';
    }
  }
  cleanNom() {
    this.msgErrNom = '';
  }

  // Fonction de Validation du prenom avec message d'erreurs
  validPrenom() {
    if (this.formCreateAccount.controls['prenom'].hasError('required')) {
      this.msgErrPrenom = 'Veuillez renseigner un prénom';
    } else if (this.formCreateAccount.controls['prenom'].hasError('pattern')) {
      this.msgErrPrenom = 'Veuillez saisir un prénom valide';
    }
  }
  cleanPrenom() {
    this.msgErrPrenom = '';
  }

  // Fonction de Validation de l'adresse avec message d'erreurs
  validAddress() {
    if (this.formCreateAccount.controls['address'].hasError('required')) {
      this.msgErrAddress = 'Veuillez renseigner une adresse';
    }
  }
  cleanAddress() {
    this.msgErrAddress = '';
  }

  // Fonction de Validation du code postal avec message d'erreurs
  validZipCode() {
    if (this.formCreateAccount.controls['zipCode'].hasError('required')) {
      this.msgErrZipCode = 'Veuillez renseigner un code postal';
    } else if (this.formCreateAccount.controls['zipCode'].hasError('pattern')) {
      this.msgErrZipCode = 'Veuillez saisir un code postal valide';
    }
  }
  cleanZipCode() {
    this.msgErrZipCode = '';
  }

  // Fonction de Validation de la ville avec message d'erreurs
  validVille() {
    if (this.formCreateAccount.controls['ville'].hasError('required')) {
      this.msgErrVille = 'Veuillez renseigner une ville';
    }
  }
  cleanVille() {
    this.msgErrVille = '';
  }

    // Fonction de Validation du téléphone fixe avec message d'erreurs
    validTelFixe() {
      if (this.formCreateAccount.controls['telFixe'].hasError('pattern')) {
        this.msgErrTelFixe = 'Veuillez renseigner un numéro de téléphone valide';
      }
    }
    cleanTelFixe() {
      this.msgErrTelFixe = '';
    }

    // Fonction de Validation du téléphone fixe avec message d'erreurs
    validTelPortable() {
      if (this.formCreateAccount.controls['telPortable'].hasError('pattern')) {
        this.msgErrTelFixe = 'Veuillez renseigner un numéro de téléphone valide';
      }
    }
    cleanTelPortable() {
      this.msgErrTelFixe = '';
    }

    // Fonction de Validation du téléphone fixe avec message d'erreurs
    // validDateNaiss() {
    //   if (this.formCreateAccount.controls['dateNaiss'].hasError('pattern')) {
    //     this.msgErrDateNaiss = 'Veuillez renseigner une date valide';
    //   }
    // }
    // cleanDateNaiss() {
    //   this.msgErrDateNaiss = '';
    // }

}
