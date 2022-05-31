import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usuarios } from 'src/app/Models/usuarios';

import { HeaderService } from 'src/app/servicios/header.service';
import { RedessocialesService } from 'src/app/servicios/redessociales.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  listaHeader:any;
  listaRedesSociales:any;
  listaUsuarios:any;
  //prueba agregué hasta //
  id: string = "";
  usuarioActual: Usuarios =
    {
      nombre: '', apellido: '', fecha_nacimiento: '', domicilio: '', nacionalidad :'', mail : '', password : '',
      sobre_mi : '', ocupacion : '', imagen_background_header : '', imagen_perfil : '', perfil :''
    };
    //
  constructor(private datosHeader:HeaderService,
              private datosUsuarios:UsuariosService,
              private datosRedesSociales:RedessocialesService) { }

  ngOnInit(): void {

    this.datosHeader.obtenerHeader().subscribe(data => {
      this.listaHeader = data;}) 

    
    this.datosUsuarios.obtenerUsuarios().subscribe(data => {
      this.listaUsuarios = data;}) 
    
      // Agrego esto hasta //
      this.id = "1";//this.activatedRoute.snapshot.params['id'];
    this.datosUsuarios.obtenerUnUsuario(this.id).subscribe(
      res => { this.usuarioActual = res },
      err => console.log(err)
    );
      //
    this.datosRedesSociales.obtenerRedesSociales().subscribe(data => {
      this.listaRedesSociales = data;})
  }
}
