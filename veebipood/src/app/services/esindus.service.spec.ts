import { TestBed } from '@angular/core/testing';

import { EsindusService } from './esindus.service';

describe('EsindusService', () => {
  let service: EsindusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsindusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
