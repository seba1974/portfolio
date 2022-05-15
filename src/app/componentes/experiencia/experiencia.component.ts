import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  listaExperiencia: any;

  constructor(
    private datosExperiencia: ExperienciaService,
    private router: Router) {

      
  }

  ngOnInit(): void {
    this.datosExperiencia.obtenerExperiencia().subscribe(data => {
      console.log(data);
      this.listaExperiencia = data; //nombre de la tabla de la BD o JSON 
    });
  }

  eliminarExperiencia(id: string) {
    this.datosExperiencia.borrarExperiencia(id).subscribe
      (
        data => { this.ngOnInit(); },
        err => console.log(err)
      );
  }
}
