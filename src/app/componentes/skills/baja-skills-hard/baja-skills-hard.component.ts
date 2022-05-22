import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/Models/skills';
import { SkillsHardService } from 'src/app/servicios/skills-hard.service';

@Component({
  selector: 'app-baja-skills-hard',
  templateUrl: './baja-skills-hard.component.html',
  styleUrls: ['./baja-skills-hard.component.css']
})
export class BajaSkillsHardComponent implements OnInit {

  id: string = "";
  skillActual: Skills =
    {
       habilidad: '', porcentaje: ''
    };

  constructor(private skillshardService: SkillsHardService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.skillshardService.obtenerUnSkills_Hard(this.id).subscribe(
      res => { this.skillActual = res },
      err => console.log(err)
    );
  }

  borrar() {
    this.skillshardService.borrarSkill_Hard(this.id).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }
}
