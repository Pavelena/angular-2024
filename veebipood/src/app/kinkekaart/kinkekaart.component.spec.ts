import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinkekaartComponent } from './kinkekaart.component';

describe('KinkekaartComponent', () => {
  let component: KinkekaartComponent;
  let fixture: ComponentFixture<KinkekaartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KinkekaartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KinkekaartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
