import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTourContainerComponent } from './product-tour-container.component';

describe('ProductTourContainerComponent', () => {
  let component: ProductTourContainerComponent;
  let fixture: ComponentFixture<ProductTourContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTourContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTourContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
