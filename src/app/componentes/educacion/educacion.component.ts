import { Component, OnInit } from '@angular/core';

import { SrvdataService } from 'src/app/servicios/srvdata.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  listaEducacion:any;
  constructor(private datosEducacion:SrvdataService) { }

  ngOnInit(): void {
    this.datosEducacion.obtenerDatos().subscribe(data => {

      this.listaEducacion = data.educacion;
      
    })

  }

}
