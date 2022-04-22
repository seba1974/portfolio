import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAcercadeComponent } from './modificar-acercade.component';

describe('ModificarAcercadeComponent', () => {
  let component: ModificarAcercadeComponent;
  let fixture: ComponentFixture<ModificarAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarAcercadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
