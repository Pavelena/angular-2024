import { TestBed } from '@angular/core/testing';

import { PakiautomaadidService } from './pakiautomaadid.service';

describe('PakiautomaadidService', () => {
  let service: PakiautomaadidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PakiautomaadidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
