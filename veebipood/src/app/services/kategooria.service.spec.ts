import { TestBed } from '@angular/core/testing';

import { KategooriaService } from './kategooria.service';

describe('KategooriaService', () => {
  let service: KategooriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KategooriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
