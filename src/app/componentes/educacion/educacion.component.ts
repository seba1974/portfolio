import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  listaEducacion: any; /* declaro una variable de tipo any para su posterior uso */

  constructor(
    private datosEducacion: EducacionService,
    private router: Router
  ) {
    /* inyecto en mi componente el servicio */
  }

  ngOnInit(): void {
    this.datosEducacion.obtenerEducacion().subscribe((data) => {
      console.log(data);
      this.listaEducacion =
        data; /*tbleducacion = nombre de la tabla en la BD de acá vamos al html de componente a crear el ngFor*/
    });
  }

  eliminarEducacion(id: string) 
  {
    this.datosEducacion.borrarEducacion(id).subscribe
    (
      data => { this.ngOnInit();},
      err => console.log(err)
    );
  }
}
