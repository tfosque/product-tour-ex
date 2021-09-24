import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductTourService {
  currStep = new BehaviorSubject<number>(1);
  currStep$ = this.currStep.asObservable();

  constructor() { }

  step1(step: number) {
    console.log('step1');
  }
  step2(step: number) {
    console.log('step2');
  }
  step3(step: number) {
    console.log('step3');
  }
  step4(step: number) {
    console.log('step3');
  }
}
