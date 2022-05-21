import { Component, OnInit } from '@angular/core';

import { AcercadeService } from 'src/app/servicios/acercade.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  listaAcercade:any; // variable 

  constructor(private acercadeService:AcercadeService) { }

  ngOnInit(): void {
    this.acercadeService.obtenerAcercade().subscribe(data => {
      console.log(data);
      this.listaAcercade = data; //nombre de la tabla de la BD o JSON
      
    })
  }
  editarAcercade(): void {
    alert ("se va a editar Acerca de...");
    //A RESOLVER  this.acercadeService.editarAcercade(this.listaAcercade.id, listaAcercade);
  }

  editarFoto(): void {
    alert ("se va a editar la Foto...");
  }
}

