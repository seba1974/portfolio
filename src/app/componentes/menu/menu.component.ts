import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/Models/usuarios';

import { HeaderService } from 'src/app/servicios/header.service';
import { RedessocialesService } from 'src/app/servicios/redessociales.service';
import { TokenService } from 'src/app/servicios/token.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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

    isLogged = false;
    nombreUsuario = '';

  constructor(private datosHeader : HeaderService,
              private datosUsuarios : UsuariosService,
              private datosRedesSociales : RedessocialesService,
              private tokenService : TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }

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
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}




















