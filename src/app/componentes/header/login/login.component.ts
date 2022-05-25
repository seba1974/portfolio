import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  txtEmail: any; txtPassword: any

  constructor(private usuarioService: UsuariosService,
              private router: Router) { }
    

  ngOnInit(): void {
  }

  IniciarSesion(): void { 
        const email = this.txtEmail
        const pass = this.txtPassword
        this.usuarioService.iniciarSesion(email).subscribe(
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
