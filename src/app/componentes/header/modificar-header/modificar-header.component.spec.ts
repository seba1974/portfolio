import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHeaderComponent } from './modificar-header.component';

describe('ModificarHeaderComponent', () => {
  let component: ModificarHeaderComponent;
  let fixture: ComponentFixture<ModificarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
