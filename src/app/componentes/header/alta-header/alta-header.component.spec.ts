import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaHeaderComponent } from './alta-header.component';

describe('AltaHeaderComponent', () => {
  let component: AltaHeaderComponent;
  let fixture: ComponentFixture<AltaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
