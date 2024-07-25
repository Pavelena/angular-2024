import { TestBed } from '@angular/core/testing';

import { ShipmentTabelService } from './shipment-tabel.service';

describe('ShipmentTabelService', () => {
  let service: ShipmentTabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipmentTabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
