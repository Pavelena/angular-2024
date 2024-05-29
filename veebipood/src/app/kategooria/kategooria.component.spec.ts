import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategooriaComponent } from './kategooria.component';

describe('KategooriaComponent', () => {
  let component: KategooriaComponent;
  let fixture: ComponentFixture<KategooriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KategooriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KategooriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
