import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductTourService {
  private currStep = new BehaviorSubject<number>(0);
  public currStep$ = this.currStep.asObservable();

  constructor() { }

  public advanceStepper(step: number) {
    console.log({ step });
    this.currStep.next(step);
  }

  /*   step1(step: number) {
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
    } */
}
