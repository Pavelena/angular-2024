import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaldaTegelasiComponent } from './halda-tegelasi.component';

describe('HaldaTegelasiComponent', () => {
  let component: HaldaTegelasiComponent;
  let fixture: ComponentFixture<HaldaTegelasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HaldaTegelasiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HaldaTegelasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
