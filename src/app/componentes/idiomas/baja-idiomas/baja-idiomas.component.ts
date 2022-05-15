import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idiomas } from 'src/app/Models/idiomas';
import { IdiomasService } from 'src/app/servicios/idiomas.service';

@Component({
  selector: 'app-baja-idiomas',
  templateUrl: './baja-idiomas.component.html',
  styleUrls: ['./baja-idiomas.component.css']
})
export class BajaIdiomasComponent implements OnInit {

  id: string = "";
  idiomaActual: Idiomas =
    {
      dni: '', idioma: '', porcentaje_oral: '', porcentaje_escrita: ''
    };

  constructor(private idiomasService: IdiomasService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.idiomasService.obtenerUnIdioma(this.id).subscribe(
      res => { this.idiomaActual = res },
      err => console.log(err)
    );
  }

  borrar() {
    this.idiomasService.borrarIdiomas(this.id).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }
}
