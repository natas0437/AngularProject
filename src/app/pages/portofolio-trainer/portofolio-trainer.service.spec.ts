import { TestBed } from '@angular/core/testing';

import { PortofolioTrainerService } from './portofolio-trainer.service';

describe('PortofolioTrainerService', () => {
  let service: PortofolioTrainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortofolioTrainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
