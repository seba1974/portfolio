import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  listaProyectos: any;

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectosService.obtenerProyectos().subscribe(data => {
      console.log(data);
      this.listaProyectos = data; //nombre de la tabla de la BD o JSON
    })
  }

  eliminarProyecto(id: string) {
    this.proyectosService.borrarProyecto(id).subscribe
      (
        data => { this.ngOnInit(); },
        err => console.log(err)
      );
  }
}