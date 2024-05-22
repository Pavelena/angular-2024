import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksToodeComponent } from './yks-toode.component';

describe('YksToodeComponent', () => {
  let component: YksToodeComponent;
  let fixture: ComponentFixture<YksToodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksToodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YksToodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
