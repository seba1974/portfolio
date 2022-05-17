import { Component, OnInit } from '@angular/core';

import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  lista_Skills_Hard: any;
  lista_Skills_Soft: any;

  constructor(private datosSkills_Hard: SkillsService,
    private datosSkills_Soft: SkillsService) { }

  ngOnInit(): void {
    this.datosSkills_Hard.obtenerSkills_Hard().subscribe(data => {
      console.log(data);
      this.lista_Skills_Hard = data; //nombre de la tabla de la BD o JSON
      //this.lista_Skills_Soft = data;
    })
    this.datosSkills_Soft.obtenerSkills_Soft().subscribe(data => {
      console.log(data);
      this.lista_Skills_Soft = data; //nombre de la tabla de la BD o JSON

    })

  }
}
