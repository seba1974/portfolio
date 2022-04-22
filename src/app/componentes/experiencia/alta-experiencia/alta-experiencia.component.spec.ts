import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaExperienciaComponent } from './alta-experiencia.component';

describe('AltaExperienciaComponent', () => {
  let component: AltaExperienciaComponent;
  let fixture: ComponentFixture<AltaExperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaExperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaExperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
