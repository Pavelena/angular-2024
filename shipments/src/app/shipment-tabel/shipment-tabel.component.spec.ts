import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentTabelComponent } from './shipment-tabel.component';

describe('ShipmentTabelComponent', () => {
  let component: ShipmentTabelComponent;
  let fixture: ComponentFixture<ShipmentTabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentTabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipmentTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
