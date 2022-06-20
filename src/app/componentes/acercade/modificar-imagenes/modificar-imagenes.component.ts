import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from 'src/app/Models/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-modificar-imagenes',
  templateUrl: './modificar-imagenes.component.html',
  styleUrls: ['./modificar-imagenes.component.css']
})
export class ModificarImagenesComponent implements OnInit {
  id: string = "";
  usuarioActual: Usuarios =
    {
      nombre: '', apellido: '', fecha_nacimiento: '', domicilio: '', nacionalidad :'', mail : '', password : '',
      sobre_mi : '', ocupacion : '', imagen_background_header : '', imagen_perfil : '', perfil :''
    };

  constructor(
    private usuarioService: UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.usuarioService.obtenerUnUsuario(this.id).subscribe(
      res => { this.usuarioActual = res },
      err => console.log(err)
    );
    
  }

  guardar() {
    this.usuarioService.editarUsuario(this.id, this.usuarioActual).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }

}