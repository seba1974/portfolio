import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/Models/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';

@Component({
  selector: 'app-modificar-proyectos',
  templateUrl: './modificar-proyectos.component.html',
  styleUrls: ['./modificar-proyectos.component.css']
})
export class ModificarProyectosComponent implements OnInit {

  id: string = "";
  proyectoActual: Proyectos =
    {
      dni: '', nombre: '', fecha: '', descripcion: '', link:'', imagen:''
    };

  constructor(
    private proyectosService: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.proyectosService.obtenerUnProyecto(this.id).subscribe(
      res => { this.proyectoActual = res },
      err => console.log(err)
    );
  }

  guardar() {
    this.proyectosService.editarProyecto(this.id, this.proyectoActual).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }
}