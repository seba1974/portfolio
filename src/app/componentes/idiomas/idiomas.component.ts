import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/servicios/idiomas.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  listaIdiomas: any;
  isLogged = false;
  nombreUsuario = '';

  constructor(private idiomasService: IdiomasService,
    private tokenService: TokenService) { }

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }


    this.idiomasService.obtenerIdiomas().subscribe(data => {
      console.log(data);
      this.listaIdiomas = data; //.tblidiomas nombre de la tabla de la BD o JSON
    });
  }

  eliminarIdiomas(id: string) {
    this.idiomasService.borrarIdiomas(id).subscribe
      (
        data => { this.ngOnInit(); },
        err => console.log(err)
      );
  }
}
