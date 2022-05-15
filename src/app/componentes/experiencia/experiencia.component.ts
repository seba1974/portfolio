import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  listaExperiencia:any;

  
  constructor(private datosExperiencia:ExperienciaService,
              private router:Router) { 
    
    }

  ngOnInit(): void {
    this.datosExperiencia.obtenerExperiencia().subscribe(data => {
      console.log(data);
      this.listaExperiencia = data; //nombre de la tabla de la BD o JSON 
    })

  }
  navegarCrearExperiencia() {
    this.router.navigate(['/experiencia/crear']);
  }
  navegarEditarExperiencia(){
    this.router.navigate(['/experiencia/editar']);
  }
  navegarBorrarExperiencia(id:number) {
    this.router.navigate(['/experiencia/borrar']);
  }
}
