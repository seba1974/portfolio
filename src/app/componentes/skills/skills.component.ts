import { Component, OnInit } from '@angular/core';

import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  lista_Skills_Hard:any;
  lista_Skills_Soft:any;

  constructor(private datosSkills:SkillsService) {   }

  ngOnInit(): void {  this.datosSkills.obtenerSkills().subscribe(data => {
    console.log(data);
    this.lista_Skills_Hard = data.tblskills_hard; //nombre de la tabla de la BD o JSON
    this.lista_Skills_Soft = data.tblskills_soft;
  })

  }

}
