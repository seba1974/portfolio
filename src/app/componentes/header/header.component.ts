import { Component, OnInit } from '@angular/core';

import { SrvdataService } from 'src/app/servicios/srvdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listaHeader:any;
  listaRedesSociales:any;

  constructor(private datosHeader:SrvdataService) { }

  ngOnInit(): void {
    this.datosHeader.obtenerDatos().subscribe(data => {
    console.log(data);
    this.listaHeader = data.tblperfil; //nombre de la tabla de la BD o JSON
    this.listaRedesSociales = data.tblredes_sociales; //nombre de la tabla de la BD o JSON
  })
}

}
