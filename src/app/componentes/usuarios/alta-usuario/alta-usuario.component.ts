import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/Models/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {

  
  nombre: any; apellido: any; fecha_nacimiento: any;
  domicilio: any; nacionalidad :any; mail : any; password : any;
  repetirpassword : any;
  sobre_mi : any; ocupacion : any; imagen_background_header : any;
  imagen_perfil : any; perfil : any;
    

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    //console.log("password",this.password);
    //console.log("repetirpassword", this.repetirpassword);
    if (this.repetirpassword != this.password) {
      alert ("Las contraseñas no coinciden");
    return;
    }

    const usuario = new Usuarios(this.nombre, this.apellido, this.fecha_nacimiento,
       this.domicilio, this.nacionalidad, this.mail, this.password, this.sobre_mi,
        this.ocupacion, this.imagen_background_header, this.imagen_perfil, this.perfil)
    this.usuarioService.crearUsuario(usuario).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.router.navigate(['/']);
      }
    );
  }
}
