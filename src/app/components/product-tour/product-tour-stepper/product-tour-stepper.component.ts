import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-product-tour-stepper',
  templateUrl: './product-tour-stepper.component.html',
  styleUrls: ['./product-tour-stepper.component.scss'],
})
export class ProductTourStepperComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') stepper: MatStepper;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.stepper.selectedIndex = 0;
  }

  buttonClick(input: any) {
    console.log('recv emitter', { input });
  }
}
