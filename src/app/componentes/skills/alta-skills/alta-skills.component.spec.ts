import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaSkillsComponent } from './alta-skills.component';

describe('AltaSkillsComponent', () => {
  let component: AltaSkillsComponent;
  let fixture: ComponentFixture<AltaSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
