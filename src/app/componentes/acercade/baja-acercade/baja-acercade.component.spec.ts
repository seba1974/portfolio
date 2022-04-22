import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaAcercadeComponent } from './baja-acercade.component';

describe('BajaAcercadeComponent', () => {
  let component: BajaAcercadeComponent;
  let fixture: ComponentFixture<BajaAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaAcercadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
