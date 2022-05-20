import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/Models/skills';
import { SkillsHardService } from 'src/app/servicios/skills-hard.service';
import { SkillsSoftService } from 'src/app/servicios/skills-soft.service';


@Component({
  selector: 'app-alta-skills',
  templateUrl: './alta-skills.component.html',
  styleUrls: ['./alta-skills.component.css']
})
export class AltaSkillsComponent implements OnInit {
  dni: any;
  habilidad: any;
  porcentaje: any;


  constructor(
    private skillsoftService: SkillsSoftService,
    private skillhardService: SkillsHardService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreateHard(): void {
    const skills_hard = new Skills(this.dni, this.habilidad, this.porcentaje)
    this.skillhardService.crearSkill_Hard(skills_hard).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
    }
    onCreateSoft(): void {    
    const skills_soft = new Skills(this.dni, this.habilidad, this.porcentaje)
    this.skillsoftService.crearSkill_Soft(skills_soft).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }
}
