import { Component, OnInit } from '@angular/core';

import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  listaExperiencia:any;

  
  constructor(private datosExperiencia:ExperienciaService) { 
    
    }

  ngOnInit(): void {
    this.datosExperiencia.obtenerExperiencia().subscribe(data => {
      console.log(data);
      this.listaExperiencia = data.tblexperiencia_laboral; //nombre de la tabla de la BD o JSON
      
    })

  }

}
