import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTourStepperComponent } from './product-tour-stepper.component';

describe('ProductTourStepperComponent', () => {
  let component: ProductTourStepperComponent;
  let fixture: ComponentFixture<ProductTourStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTourStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTourStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
