import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Experiencia } from 'src/app/Models/experiencia';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alta-experiencia',
  templateUrl: './alta-experiencia.component.html',
  styleUrls: ['./alta-experiencia.component.css']
})
export class AltaExperienciaComponent implements OnInit {

  dni: any;
  empresa: any;
  puesto: any;
  ubic_empresa: any;
  area_cobertura: any;
  img_logo: any;
  fecha_ingreso: any;
  fecha_egreso: any;
  descripcion: any;

  constructor(
    private experienciaService: ExperienciaService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.dni, this.empresa, this.puesto, this.ubic_empresa, this.area_cobertura,
      this.img_logo, this.fecha_ingreso, this.fecha_egreso, this.descripcion);
    this.experienciaService.crearExperiencia(experiencia).subscribe(
      data => {
        this.router.navigate(['/']);
        console.log(data)
      },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }
}
