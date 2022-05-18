import { Component, OnInit } from '@angular/core';
import { RedessocialesService } from 'src/app/servicios/redessociales.service';

@Component({
  selector: 'app-redessociales',
  templateUrl: './redessociales.component.html',
  styleUrls: ['./redessociales.component.css']
})
export class RedessocialesComponent implements OnInit {
  listaRedSocial: any;

  constructor(private redsocialService: RedessocialesService) { }

  ngOnInit(): void {
    this.redsocialService.obtenerRedesSociales().subscribe(data => {
      console.log(data);
      this.listaRedSocial = data; 
    });
  }

  eliminarRedSocial(id: string) {
    this.redsocialService.borrarUnaRedSocial(id).subscribe
      (
        data => { this.ngOnInit(); },
        err => console.log(err)
      );
  }
}
