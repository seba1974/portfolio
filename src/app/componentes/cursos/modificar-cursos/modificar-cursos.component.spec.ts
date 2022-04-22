import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCursosComponent } from './modificar-cursos.component';

describe('ModificarCursosComponent', () => {
  let component: ModificarCursosComponent;
  let fixture: ComponentFixture<ModificarCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
