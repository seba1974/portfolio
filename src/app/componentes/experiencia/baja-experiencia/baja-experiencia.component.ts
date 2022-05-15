import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-baja-experiencia',
  templateUrl: './baja-experiencia.component.html',
  styleUrls: ['./baja-experiencia.component.css']
})
export class BajaExperienciaComponent implements OnInit {
  experiencia:any;

  constructor(private datosExperiencia:ExperienciaService,
              private router:Router,
              private activatedRoute: ActivatedRoute
              ) { 

}

ngOnInit(): void {
//const id = this.activatedRoute.snapshot.params.id;
 // this.datosExperiencia.obtenerUnaExperiencia(id).subscribe(data => {
//console.log(data);
//this.experiencia = data; 
//})

}

}

