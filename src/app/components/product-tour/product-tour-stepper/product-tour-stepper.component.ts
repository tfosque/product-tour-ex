import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-tour-stepper',
  templateUrl: './product-tour-stepper.component.html',
  styleUrls: ['./product-tour-stepper.component.scss']
})
export class ProductTourStepperComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  buttonClick(input: any) {
    console.log('recv emitter', { input })
  }
}
