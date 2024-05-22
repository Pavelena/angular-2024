import { TestBed } from '@angular/core/testing';

import { TarnijaService } from './tarnija.service';

describe('TarnijaService', () => {
  let service: TarnijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarnijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
