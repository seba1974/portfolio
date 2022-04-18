import { Component, OnInit } from '@angular/core';

import { SrvdataService } from 'src/app/servicios/srvdata.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  lista_Skills_Hard:any;
  lista_Skills_Soft:any;

  constructor(private datosSkills:SrvdataService) {   }

  ngOnInit(): void {  this.datosSkills.obtenerDatos().subscribe(data => {
    console.log(data);
    this.lista_Skills_Hard = data.tblskills_hard; //nombre de la tabla de la BD o JSON
    this.lista_Skills_Soft = data.tblskills_soft;
  })

  }

}
