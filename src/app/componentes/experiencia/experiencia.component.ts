import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  listaExperiencia: any;
  isLogged = false;
  nombreUsuario = '';

  constructor(private experienciaService : ExperienciaService,
              private tokenService : TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
    this.experienciaService.obtenerExperiencia().subscribe(data => {
      console.log(data);
      this.listaExperiencia = data; //nombre de la tabla de la BD o JSON 
    });
  }

 /* eliminarExperiencia(id: string) {
    this.experienciaService.borrarExperiencia(id).subscribe
      (
        data => { this.ngOnInit(); },
        err => console.log(err)
      );
  }*/
}
