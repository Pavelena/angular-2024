import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksEsindusComponent } from './yks-esindus.component';

describe('YksEsindusComponent', () => {
  let component: YksEsindusComponent;
  let fixture: ComponentFixture<YksEsindusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksEsindusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YksEsindusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
