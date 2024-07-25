import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteeriNupudComponent } from './sorteeri-nupud.component';

describe('SorteeriNupudComponent', () => {
  let component: SorteeriNupudComponent;
  let fixture: ComponentFixture<SorteeriNupudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SorteeriNupudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SorteeriNupudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
