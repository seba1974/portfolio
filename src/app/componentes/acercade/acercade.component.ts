import { Component, OnInit } from '@angular/core';

import { AcercadeService } from 'src/app/servicios/acercade.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  listaAcercade:any;
  constructor(private datosAcercade:AcercadeService) { }

  ngOnInit(): void {
    this.datosAcercade.obtenerAcercade().subscribe(data => {
      console.log(data);
      this.listaAcercade = data.tblperfil; //nombre de la tabla de la BD o JSON
      
    })
  }

}
