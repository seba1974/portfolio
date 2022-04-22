import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaSkillsComponent } from './baja-skills.component';

describe('BajaSkillsComponent', () => {
  let component: BajaSkillsComponent;
  let fixture: ComponentFixture<BajaSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
