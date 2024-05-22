import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsindusedComponent } from './esindused.component';

describe('EsindusedComponent', () => {
  let component: EsindusedComponent;
  let fixture: ComponentFixture<EsindusedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsindusedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EsindusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
