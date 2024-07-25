import { TestBed } from '@angular/core/testing';

import { AutodService } from './autod.service';

describe('AutodService', () => {
  let service: AutodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
