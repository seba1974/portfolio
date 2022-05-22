import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/Models/skills';
import { SkillsSoftService } from 'src/app/servicios/skills-soft.service';

@Component({
  selector: 'app-baja-skills-soft',
  templateUrl: './baja-skills-soft.component.html',
  styleUrls: ['./baja-skills-soft.component.css']
})
export class BajaSkillsSoftComponent implements OnInit {

  id: string = "";
  skillActual: Skills =
    {
       habilidad: '', porcentaje: ''
    };

  constructor(private skillssoftService: SkillsSoftService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.skillssoftService.obtenerUnSkills_Soft(this.id).subscribe(
      res => { this.skillActual = res },
      err => console.log(err)
    );
  }

  borrar() {
    this.skillssoftService.borrarSkill_Soft(this.id).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }
}
