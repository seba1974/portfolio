import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaEducacionComponent } from './baja-educacion.component';

describe('BajaEducacionComponent', () => {
  let component: BajaEducacionComponent;
  let fixture: ComponentFixture<BajaEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
