import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarIdiomasComponent } from './modificar-idiomas.component';

describe('ModificarIdiomasComponent', () => {
  let component: ModificarIdiomasComponent;
  let fixture: ComponentFixture<ModificarIdiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarIdiomasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
