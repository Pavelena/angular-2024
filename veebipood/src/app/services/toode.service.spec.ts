import { TestBed } from '@angular/core/testing';

import { ToodeService } from './toode.service';

describe('ToodeService', () => {
  let service: ToodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
