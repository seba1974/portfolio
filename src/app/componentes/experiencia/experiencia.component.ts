import { Component, OnInit } from '@angular/core';

import { SrvdataService } from 'src/app/servicios/srvdata.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  listaExperiencia:any;

  constructor(private datosExperiencia:SrvdataService) {   }

  ngOnInit(): void {
    this.datosExperiencia.obtenerDatos().subscribe(data => {
      console.log(data);
      this.listaExperiencia = data.tblexperiencia_laboral; //nombre de la tabla de la BD o JSON
      
    })

  }

}
