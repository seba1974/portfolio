import { Component, OnInit } from '@angular/core';

import { SrvdataService } from 'src/app/servicios/srvdata.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  listaEducacion:any;   /* declaro una variable de tipo any para su posterior uso */
  constructor(private datosEducacion:SrvdataService) {  /* inyecto en mi componente el servicio */

   }

  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(data => {

      this.listaEducacion = data.tbleducacion; /*tbleducacion = nombre de la tabla en la BD de acá vamos al html de componente a crear el ngFor*/
      
    })

  }

}
