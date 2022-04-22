import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaEducacionComponent } from './alta-educacion.component';

describe('AltaEducacionComponent', () => {
  let component: AltaEducacionComponent;
  let fixture: ComponentFixture<AltaEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
