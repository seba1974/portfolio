import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/Models/usuarios';
import { TokenService } from 'src/app/servicios/token.service';

//import { AcercadeService } from 'src/app/servicios/acercade.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  listaUsuarios:any; // variable 
  id: string = "";
  usuarioActual: Usuarios =
    {
      nombre: '', apellido: '', fecha_nacimiento: '', domicilio: '', nacionalidad :'', mail : '', password : '',
      sobre_mi : '', ocupacion : '', imagen_background_header : '', imagen_perfil : '', perfil :''
    };
    //

    isLogged = false;
    nombreUsuario = '';

  constructor(private usuariosService:UsuariosService,
              private tokenService : TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
    /*this.usuariosService.obtenerUsuarios().subscribe(data => {
      console.log(data);
      this.listaUsuarios = data; //nombre de la tabla de la BD o JSON
      
    })*/
  // Agrego esto hasta //
  this.id = "1";//this.activatedRoute.snapshot.params['id'];
  this.usuariosService.obtenerUnUsuario(this.id).subscribe(
    res => { this.usuarioActual = res },
    err => console.log(err)
  );
    //


  }
  editarAcercade(): void {
    alert ("se va a editar Acerca de...");
    //A RESOLVER  this.acercadeService.editarAcercade(this.listaAcercade.id, listaAcercade);
  }

  editarFoto(): void {
    alert ("se va a editar la Foto...");
    
  }
}

