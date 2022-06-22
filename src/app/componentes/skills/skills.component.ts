import { Component, OnInit } from '@angular/core';

import { SkillsHardService } from 'src/app/servicios/skills-hard.service';
import { SkillsSoftService } from 'src/app/servicios/skills-soft.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  lista_Skills_Hard: any;
  lista_Skills_Soft: any;

  isLogged = false;
  nombreUsuario = '';

  constructor(private datosSkills_Hard: SkillsHardService,
    private datosSkills_Soft: SkillsSoftService,
    private tokenService: TokenService) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }

    this.datosSkills_Hard.obtenerSkills_Hard().subscribe(data => {
      this.lista_Skills_Hard = data;
    })
    this.datosSkills_Soft.obtenerSkills_Soft().subscribe(data => {

      this.lista_Skills_Soft = data;
    })
  }

  // Falta agregar la funcion eliminarSkills_Hard y eliminarSkills_Soft
}
