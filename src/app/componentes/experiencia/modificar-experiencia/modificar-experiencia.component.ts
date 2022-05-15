import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/Models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-modificar-experiencia',
  templateUrl: './modificar-experiencia.component.html',
  styleUrls: ['./modificar-experiencia.component.css']
})
export class ModificarExperienciaComponent implements OnInit {

  id: string = "";
  experienciaActual: Experiencia =
    {
      dni: '', empresa: '', puesto: '', ubic_empresa: '', area_cobertura: '',
      img_logo: '', fecha_ingreso: '', fecha_egreso: '', descripcion: ''
    };

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRouter.snapshot.params['id'];
    this.experienciaService.obtenerUnaExperiencia(this.id).subscribe(
      res => { this.experienciaActual = res },
      err => console.log(err)
    );
  }

  guardar() {
    this.experienciaService.editarExperiencia(this.id, this.experienciaActual).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }

}