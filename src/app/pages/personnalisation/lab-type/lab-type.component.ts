import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-lab-type',
  templateUrl: './lab-type.component.html',
  styleUrls: ['./lab-type.component.css']
})
export class LabTypeComponent implements OnInit {

  typeBijouForm: FormGroup;
  tailleBraceletForm: FormGroup;
  tailleCollierForm: FormGroup;
  valBijou: string;
  valTaille: string;
  bracelet: boolean;
  collier: boolean;
  bo: boolean;


  constructor(private fb: FormBuilder) {
    this.bracelet = false;
    this.collier = false;
    this.bo = false;
   }

  ngOnInit() {
    this.validationTypeBijouForm();
    this.validationTailleBraceletForm();
    this.validationTailleCollierForm();
    this.validFormulaireTypeAndTaille();
  }

  validationTypeBijouForm() {
    this.typeBijouForm = this.fb.group({
      bijou: ['', Validators.required]
    });
  }

  validationTailleBraceletForm() {
    this.tailleBraceletForm = this.fb.group({
      taillebracelet: ['', Validators.required]
    });
  }

  validationTailleCollierForm() {
    this.tailleCollierForm = this.fb.group({
      taillecollier: ['', Validators.required]
    });
  }

  validFormulaireTypeAndTaille() {
      /*if (this.typeBijouForm.valid && this.valBijou === 'bo') {
        this.enable = true;
      } else if (this.typeBijouForm.valid &&  this.valBijou === 'collier' && this.tailleCollierForm.valid) {
        this.enable = true;
      } else if (this.typeBijouForm.valid && this.valBijou === 'bracelet' && this.tailleBraceletForm.valid) {
        this.enable = true;
      } else {
        this.enable = false;
      }*/
  }

  valeurBijou(event) {
    // RECUPERATION DE LA VALEUR DU BIJOU
    this.valBijou = event.target.value;
    console.log(this.valBijou);

    // AFFICHAGE FORMULAIRE TAILLE BRACELET
    if (this.valBijou === 'bracelet') {
      this.bracelet = true;
    } else {
      this.bracelet = false;
    }

    // AFFICHAGE FORMULAIRE TAILLE COLLIER
    if (this.valBijou === 'collier') {
      this.collier = true;
    } else {
      this.collier = false;
    }

    // AFFICHAGE FORMULAIRE TAILLE BO
    if (this.valBijou === 'bo') {
      this.bo = true;
    } else {
      this.bo = false;
    }

  }

  // RECUPERATION DE LA TAILLE DU BIJOU
  valeurTaille(event) {
    this.valTaille = event.target.value;
    console.log(this.valTaille);
  }



}
