import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  listaCursos: any;

  isLogged = false;
  nombreUsuario = '';

  constructor(private cursosService: CursosService,
    private tokenService: TokenService) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }

    this.cursosService.obtenerCursos().subscribe(data => {
      this.listaCursos = data;
    })
  }

  eliminarCursos(id: string) {
    this.cursosService.borrarCurso(id).subscribe
      (
        data => { this.ngOnInit(); },
        err => console.log(err)
      );
  }
}