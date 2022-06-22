import { Component, OnInit } from '@angular/core';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  listaProyectos: any;
  isLogged = false;
  nombreUsuario = '';

  constructor(private proyectosService: ProyectosService,
    private tokenService: TokenService) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }


    this.proyectosService.obtenerProyectos().subscribe(data => {
      console.log(data);
      this.listaProyectos = data; //nombre de la tabla de la BD o JSON
    })
  }

  eliminarProyecto(id: string) {
    this.proyectosService.borrarProyecto(id).subscribe
      (
        data => { this.ngOnInit(); },
        err => console.log(err)
      );
  }
}