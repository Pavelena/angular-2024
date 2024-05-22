import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarnijaComponent } from './tarnija.component';

describe('TarnijaComponent', () => {
  let component: TarnijaComponent;
  let fixture: ComponentFixture<TarnijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarnijaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TarnijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
