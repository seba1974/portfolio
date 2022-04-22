import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSkillsComponent } from './modificar-skills.component';

describe('ModificarSkillsComponent', () => {
  let component: ModificarSkillsComponent;
  let fixture: ComponentFixture<ModificarSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
