import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuudaTegelaneComponent } from './muuda-tegelane.component';

describe('MuudaTegelaneComponent', () => {
  let component: MuudaTegelaneComponent;
  let fixture: ComponentFixture<MuudaTegelaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuudaTegelaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuudaTegelaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
