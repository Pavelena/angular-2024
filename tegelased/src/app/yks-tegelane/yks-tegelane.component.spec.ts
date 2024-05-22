import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YksTegelaneComponent } from './yks-tegelane.component';

describe('YksTegelaneComponent', () => {
  let component: YksTegelaneComponent;
  let fixture: ComponentFixture<YksTegelaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YksTegelaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YksTegelaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
