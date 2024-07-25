import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodComponent } from './autod.component';

describe('AutodComponent', () => {
  let component: AutodComponent;
  let fixture: ComponentFixture<AutodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
