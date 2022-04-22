import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarProyectosComponent } from './modificar-proyectos.component';

describe('ModificarProyectosComponent', () => {
  let component: ModificarProyectosComponent;
  let fixture: ComponentFixture<ModificarProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
