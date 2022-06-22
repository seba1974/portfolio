import { Component, OnInit } from '@angular/core';
import { RedessocialesService } from 'src/app/servicios/redessociales.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-redessociales',
  templateUrl: './redessociales.component.html',
  styleUrls: ['./redessociales.component.css']
})
export class RedessocialesComponent implements OnInit {
  listaRedSocial: any;
  isLogged = false;
  nombreUsuario = '';

  constructor(private redsocialService: RedessocialesService,
    private tokenService: TokenService) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }

    this.redsocialService.obtenerRedesSociales().subscribe(data => {
      console.log(data);
      this.listaRedSocial = data; 
    });
  }
}
