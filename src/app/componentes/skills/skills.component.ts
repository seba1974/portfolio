import { Component, OnInit } from '@angular/core';

import { SrvdataService } from 'src/app/servicios/srvdata.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  listaSkills:any;

  constructor(private datosSkills:SrvdataService) {   }

  ngOnInit(): void {  this.datosSkills.obtenerDatos().subscribe(data => {
    console.log(data);
    this.listaSkills = data.tblskills; //nombre de la tabla de la BD o JSON
    
  })

  }

}
