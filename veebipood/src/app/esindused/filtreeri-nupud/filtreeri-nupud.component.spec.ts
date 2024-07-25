import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreeriNupudComponent } from './filtreeri-nupud.component';

describe('FiltreeriNupudComponent', () => {
  let component: FiltreeriNupudComponent;
  let fixture: ComponentFixture<FiltreeriNupudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreeriNupudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltreeriNupudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
