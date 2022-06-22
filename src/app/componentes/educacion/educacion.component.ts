import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  listaEducacion: any; /* declaro una variable de tipo any para su posterior uso */

  isLogged = false;
  nombreUsuario = '';

  constructor(private educacionService: EducacionService,
    private tokenService: TokenService) { }/* inyecto en mi componente el servicio */

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }

    this.educacionService.obtenerEducacion().subscribe((data) => {
      console.log(data);
      this.listaEducacion = data; /*tbleducacion = nombre de la tabla en la BD de acá vamos al html de componente a crear el ngFor*/
    });
  }

  eliminarEducacion(id: string) {
    this.educacionService.borrarEducacion(id).subscribe
      (
        data => { this.ngOnInit(); },
        err => console.log(err)
      );
  }
}