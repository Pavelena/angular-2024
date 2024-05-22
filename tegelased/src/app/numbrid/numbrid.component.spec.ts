import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbridComponent } from './numbrid.component';

describe('NumbridComponent', () => {
  let component: NumbridComponent;
  let fixture: ComponentFixture<NumbridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumbridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
