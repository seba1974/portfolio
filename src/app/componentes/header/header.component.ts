import { Component, OnInit } from '@angular/core';

import { AcercadeService } from 'src/app/servicios/acercade.service';
import { HeaderService } from 'src/app/servicios/header.service';
import { RedessocialesService } from 'src/app/servicios/redessociales.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listaHeader:any;
  listaRedesSociales:any;
  listaAcercade:any;

  constructor(private datosHeader:HeaderService,
              private datosAcercade:AcercadeService,
              private datosRedesSociales:RedessocialesService) { }

  ngOnInit(): void {
    this.datosHeader.obtenerHeader().subscribe(data => {
        this.listaHeader = data;}) 

    this.datosAcercade.obtenerAcercade().subscribe(data => {
      this.listaAcercade = data;}) 
    
    this.datosRedesSociales.obtenerRedesSociales().subscribe(data => {
      this.listaRedesSociales = data;})
  }
}
