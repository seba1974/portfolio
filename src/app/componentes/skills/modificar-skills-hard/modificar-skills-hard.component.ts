import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/Models/skills';
import { SkillsHardService } from 'src/app/servicios/skills-hard.service';


@Component({
  selector: 'app-modificar-skills-hard',
  templateUrl: './modificar-skills-hard.component.html',
  styleUrls: ['./modificar-skills-hard.component.css']
})
export class ModificarSkillsHardComponent implements OnInit {
 
  
  id: string = "";
  skillActual: Skills =
    {
      habilidad: '', porcentaje: ''
    };

  constructor(
    private skillsHardService: SkillsHardService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.skillsHardService.obtenerUnSkills_Hard(this.id).subscribe(
      res => { this.skillActual = res },
      err => console.log(err)
    );
  }

  guardar() {
    this.skillsHardService.editarSkill_Hard(this.id, this.skillActual).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }
}
