import { TestBed } from '@angular/core/testing';

import { JsonRequestsService } from './json-requests.service';

describe('JsonRequestsService', () => {
  let service: JsonRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
