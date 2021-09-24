import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductTourService {
  currStep = new BehaviorSubject<number>(0);
  currStep$ = this.currStep.asObservable();

  constructor() {}

  step1(step: number) {
    console.log('step1');
    this.currStep.next(step);
  }
  step2(step: number) {
    console.log('step2');
    this.currStep.next(step);
  }
  step3(step: number) {
    console.log('step3');
    this.currStep.next(step);
  }
  step4(step: number) {
    console.log('step3');
    this.currStep.next(step);
  }
}
