import { Component, OnInit } from '@angular/core';

import { SrvdataService } from 'src/app/servicios/srvdata.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  listaAcercade:any;
  constructor(private datosAcercade:SrvdataService) { }

  ngOnInit(): void {
    this.datosAcercade.obtenerDatos().subscribe(data => {
      console.log(data);
      this.listaAcercade = data.tblperfil; //nombre de la tabla de la BD o JSON
      
    })
  }

}
