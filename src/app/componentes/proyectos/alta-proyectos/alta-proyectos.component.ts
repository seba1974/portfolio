import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-alta-proyectos',
  templateUrl: './alta-proyectos.component.html',
  styleUrls: ['./alta-proyectos.component.css']
})
export class AltaProyectosComponent implements OnInit {

  nombre: any;
  fecha: any;
  descripcion: any;
  link: any;
  imagen: any;

  constructor(
    private proyectosService: ProyectosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  onCreate(): void {
    const proyecto = new Proyectos(this.nombre, this.fecha, this.descripcion,
      this.link, this.imagen)
    this.proyectosService.crearProyecto(proyecto).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }
}
