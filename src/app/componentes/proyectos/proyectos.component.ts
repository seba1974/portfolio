import { Component, OnInit } from '@angular/core';

import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  listaProyectos:any;
  
  constructor(private datosProyectos:ProyectosService) { }

  ngOnInit(): void {
    this.datosProyectos.obtenerProyectos().subscribe(data => {
      console.log(data);
      this.listaProyectos = data.tblproyectos; //nombre de la tabla de la BD o JSON
      
    })

  }

}
