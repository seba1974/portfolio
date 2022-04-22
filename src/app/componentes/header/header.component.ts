import { Component, OnInit } from '@angular/core';
import { AcercadeService } from 'src/app/servicios/acercade.service';

import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listaHeader:any;
  listaRedesSociales:any;

  constructor(private datosHeader:HeaderService,
              private datosAcercade:AcercadeService) { }

  ngOnInit(): void {
    this.datosHeader.obtenerHeader().subscribe(data => {
    console.log(data);
    this.listaHeader = data.tblperfil; //nombre de la tabla de la BD o JSON
    this.listaRedesSociales = data.tblredes_sociales; //nombre de la tabla de la BD o JSON
  })
}

}
