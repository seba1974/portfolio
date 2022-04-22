import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAcercadeComponent } from './alta-acercade.component';

describe('AltaAcercadeComponent', () => {
  let component: AltaAcercadeComponent;
  let fixture: ComponentFixture<AltaAcercadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaAcercadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
