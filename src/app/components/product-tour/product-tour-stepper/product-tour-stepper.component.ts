import { BehaviorSubject, Subscriber } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { ProductTourService } from 'src/app/services/tour/product-tour.service';

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

  currStep = new BehaviorSubject<number>(0);

  constructor(
    private _formBuilder: FormBuilder,
    private readonly productService: ProductTourService
  ) {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.productService.currStep$.subscribe(nextStep => {
      this.currStep.next(nextStep);
    })
  }
  ngAfterViewInit() {
    this.stepper.selectedIndex = 0;
  }

  nextStep(next: number) {
    this.productService.advanceStepper(next);
  }

  buttonClick(input: any) {
    console.log('recv emitter', { input });
  }
}
