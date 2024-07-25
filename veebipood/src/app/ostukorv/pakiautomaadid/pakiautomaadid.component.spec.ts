import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakiautomaadidComponent } from './pakiautomaadid.component';

describe('PakiautomaadidComponent', () => {
  let component: PakiautomaadidComponent;
  let fixture: ComponentFixture<PakiautomaadidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PakiautomaadidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PakiautomaadidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
