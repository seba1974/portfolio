import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaIdiomasComponent } from './baja-idiomas.component';

describe('BajaIdiomasComponent', () => {
  let component: BajaIdiomasComponent;
  let fixture: ComponentFixture<BajaIdiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaIdiomasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
