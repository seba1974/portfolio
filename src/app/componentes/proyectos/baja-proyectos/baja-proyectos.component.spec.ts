import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaProyectosComponent } from './baja-proyectos.component';

describe('BajaProyectosComponent', () => {
  let component: BajaProyectosComponent;
  let fixture: ComponentFixture<BajaProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
