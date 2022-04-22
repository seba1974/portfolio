import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaCursosComponent } from './baja-cursos.component';

describe('BajaCursosComponent', () => {
  let component: BajaCursosComponent;
  let fixture: ComponentFixture<BajaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
