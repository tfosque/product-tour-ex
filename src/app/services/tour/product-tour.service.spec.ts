import { TestBed } from '@angular/core/testing';

import { ProductTourService } from './product-tour.service';

describe('ProductTourService', () => {
  let service: ProductTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
