import { Component, OnInit } from '@angular/core';

import { SrvdataService } from 'src/app/servicios/srvdata.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  listaProyectos:any;
  constructor(private datosProyectos:SrvdataService) { }

  ngOnInit(): void {
    this.datosProyectos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.listaProyectos = data.tblproyectos; //nombre de la tabla de la BD o JSON
      
    })

  }

}
