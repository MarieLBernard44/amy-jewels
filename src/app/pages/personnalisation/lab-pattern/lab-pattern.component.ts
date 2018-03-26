import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-pattern',
  templateUrl: './lab-pattern.component.html',
  styleUrls: ['./lab-pattern.component.css']
})
export class LabPatternComponent implements OnInit {

  patternBijouForm: FormGroup;
  valPattern: string;

  constructor(private fb: FormBuilder) {
    this.valPattern = '';
  }

  ngOnInit() {
    this.validationPatternBijouForm();
  }

  validationPatternBijouForm() {
    this.patternBijouForm = this.fb.group({
      pattern: ['', Validators.required]
    });
  }

  valeurPattern(event) {
    // RECUPERATION DE LA REFERENCE DU PATTERN
    this.valPattern = event.target.value;
    console.log(this.valPattern);
  }

}
