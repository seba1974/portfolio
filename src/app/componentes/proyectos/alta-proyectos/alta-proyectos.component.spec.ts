import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaProyectosComponent } from './alta-proyectos.component';

describe('AltaProyectosComponent', () => {
  let component: AltaProyectosComponent;
  let fixture: ComponentFixture<AltaProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
