import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { HeaderService } from 'src/app/servicios/header.service';
import { RedessocialesService } from 'src/app/servicios/redessociales.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isAdmin: boolean = false;
  @Output() toggleSidenav = new EventEmitter<void>();




  
  listaHeader:any;
  listaRedesSociales:any;
  listaUsuarios:any;

  constructor(private datosHeader:HeaderService,
              private datosUsuarios:UsuariosService,
              private datosRedesSociales:RedessocialesService) { }

  ngOnInit(): void {

    this.datosHeader.obtenerHeader().subscribe(data => {
      this.listaHeader = data;}) 

    this.datosUsuarios.obtenerUsuarios().subscribe(data => {
      this.listaUsuarios = data;}) 
    
    this.datosRedesSociales.obtenerRedesSociales().subscribe(data => {
      this.listaRedesSociales = data;})
  }



  onToggleSidenav () : void{
    this.toggleSidenav.emit();
  }
}
