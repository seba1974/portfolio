import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Educacion } from 'src/app/Models/educacion'
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-educacion',
  templateUrl: './alta-educacion.component.html',
  styleUrls: ['./alta-educacion.component.css']
})
export class AltaEducacionComponent implements OnInit {

  dni: any;
  institucion: any;
  titulo: any;
  imagen: any;
  estado: any;
  promedio: any;
  anio_inicio: any;
  anio_fin: any;


  constructor(
    private educacionService: EducacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.dni, this.institucion, this.titulo, this.imagen,
      this.estado, this.promedio, this.anio_inicio, this.anio_fin)
    this.educacionService.crearEducacion(educacion).subscribe(
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
