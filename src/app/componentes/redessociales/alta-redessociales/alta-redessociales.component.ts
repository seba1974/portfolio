import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RedessocialesService } from 'src/app/servicios/redessociales.service';
import { RedesSociales } from 'src/app/Models/redessociales'
@Component({
  selector: 'app-alta-redessociales',
  templateUrl: './alta-redessociales.component.html',
  styleUrls: ['./alta-redessociales.component.css']
})
export class AltaRedessocialesComponent implements OnInit {

  dni: any;
  red: any;
  link: any;
  imagen: any;

  constructor(
    private redessocialesService: RedessocialesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const redsocial = new RedesSociales(this.red, this.link, this.imagen)
    this.redessocialesService.crearUnaRedSocial(redsocial).subscribe(
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
