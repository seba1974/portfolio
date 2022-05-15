import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Models/experiencia';

@Component({
  selector: 'app-baja-experiencia',
  templateUrl: './baja-experiencia.component.html',
  styleUrls: ['./baja-experiencia.component.css']
})

export class BajaExperienciaComponent implements OnInit {

  id: string = "";
  experienciaActual: Experiencia =
    {
      dni: '', empresa: '', puesto: '', ubic_empresa: '', area_cobertura: '',
      img_logo: '', fecha_ingreso: '', fecha_egreso: '', descripcion: ''
    };

  constructor(private experienciaService: ExperienciaService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.experienciaService.obtenerUnaExperiencia(this.id).subscribe(
      res => { this.experienciaActual = res },
      err => console.log(err)
    );
  }

  borrar() {
    this.experienciaService.borrarExperiencia(this.id).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }

}

