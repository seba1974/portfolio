import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-baja-proyectos',
  templateUrl: './baja-proyectos.component.html',
  styleUrls: ['./baja-proyectos.component.css']
})
export class BajaProyectosComponent implements OnInit {

  id: string = "";
  proyectoActual: Proyectos =
    {
      nombre: '', fecha: '', descripcion: '', link: '', imagen: ''
    };

  constructor(private proyectosService: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.obtenerUnProyecto(this.id).subscribe(
      res => { this.proyectoActual = res },
      err => console.log(err)
    );
  }

  borrar() {
    this.proyectosService.borrarProyecto(this.id).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }
}
