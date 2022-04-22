import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCursosComponent } from './alta-cursos.component';

describe('AltaCursosComponent', () => {
  let component: AltaCursosComponent;
  let fixture: ComponentFixture<AltaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
