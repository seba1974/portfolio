import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaIdiomasComponent } from './alta-idiomas.component';

describe('AltaIdiomasComponent', () => {
  let component: AltaIdiomasComponent;
  let fixture: ComponentFixture<AltaIdiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaIdiomasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
