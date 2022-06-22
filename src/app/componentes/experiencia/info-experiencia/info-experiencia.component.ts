import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-info-experiencia',
  templateUrl: './info-experiencia.component.html',
  styleUrls: ['./info-experiencia.component.css']
})
export class InfoExperienciaComponent implements OnInit {

  listaExperiencia : any;

  constructor(private experienciaService : ExperienciaService) { }

  ngOnInit(): void {
    this.experienciaService.obtenerExperiencia().subscribe(data => {
      console.log(data);
      this.listaExperiencia = data; 
    });
  }
}
