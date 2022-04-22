import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaExperienciaComponent } from './baja-experiencia.component';

describe('BajaExperienciaComponent', () => {
  let component: BajaExperienciaComponent;
  let fixture: ComponentFixture<BajaExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
