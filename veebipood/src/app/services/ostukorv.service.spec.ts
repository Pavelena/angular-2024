import { TestBed } from '@angular/core/testing';

import { OstukorvService } from './ostukorv.service';

describe('OstukorvService', () => {
  let service: OstukorvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OstukorvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
