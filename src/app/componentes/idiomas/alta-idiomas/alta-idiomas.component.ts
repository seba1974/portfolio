import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idiomas } from 'src/app/Models/idiomas';
import { IdiomasService } from 'src/app/servicios/idiomas.service';

@Component({
  selector: 'app-alta-idiomas',
  templateUrl: './alta-idiomas.component.html',
  styleUrls: ['./alta-idiomas.component.css']
})
export class AltaIdiomasComponent implements OnInit {

  idioma: any;
  porcentaje_oral: any;
  porcentaje_escrita: any;
  porcentaje_lectura : any;

  constructor(
    private idiomasService: IdiomasService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const idiomas = new Idiomas(this.idioma, this.porcentaje_oral, this.porcentaje_escrita, this.porcentaje_lectura)
    this.idiomasService.crearIdiomas(idiomas).subscribe(
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
