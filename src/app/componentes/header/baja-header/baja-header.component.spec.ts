import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaHeaderComponent } from './baja-header.component';

describe('BajaHeaderComponent', () => {
  let component: BajaHeaderComponent;
  let fixture: ComponentFixture<BajaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
