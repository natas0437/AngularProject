import { TestBed } from '@angular/core/testing';

import { ProdukService } from './product.service';

describe('ProdukService', () => {
  let service: ProdukService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdukService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
