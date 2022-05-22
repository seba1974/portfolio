import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/Models/skills';
import { SkillsSoftService } from 'src/app/servicios/skills-soft.service';

@Component({
  selector: 'app-modificar-skills-soft',
  templateUrl: './modificar-skills-soft.component.html',
  styleUrls: ['./modificar-skills-soft.component.css']
})
export class ModificarSkillsSoftComponent implements OnInit {

  
  id: string = "";
  skillActual: Skills =
    {
       habilidad: '', porcentaje: ''
    };

  constructor(
    private skillsSoftService: SkillsSoftService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.skillsSoftService.obtenerUnSkills_Soft(this.id).subscribe(
      res => { this.skillActual = res },
      err => console.log(err)
    );
  }

  guardar() {
    this.skillsSoftService.editarSkill_Soft(this.id, this.skillActual).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }
}
