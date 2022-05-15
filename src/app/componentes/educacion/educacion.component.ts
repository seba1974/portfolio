import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  listaEducacion: any; /* declaro una variable de tipo any para su posterior uso */

  constructor(private educacionService: EducacionService) { }/* inyecto en mi componente el servicio */

  ngOnInit(): void {
    this.educacionService.obtenerEducacion().subscribe((data) => {
      console.log(data);
      this.listaEducacion = data; /*tbleducacion = nombre de la tabla en la BD de acá vamos al html de componente a crear el ngFor*/
    });
  }

  eliminarEducacion(id: string) {
    this.educacionService.borrarEducacion(id).subscribe
      (
        data => { this.ngOnInit(); },
        err => console.log(err)
      );
  }
}
