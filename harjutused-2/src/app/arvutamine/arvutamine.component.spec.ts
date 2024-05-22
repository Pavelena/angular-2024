import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArvutamineComponent } from './arvutamine.component';

describe('ArvutamineComponent', () => {
  let component: ArvutamineComponent;
  let fixture: ComponentFixture<ArvutamineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArvutamineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArvutamineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
