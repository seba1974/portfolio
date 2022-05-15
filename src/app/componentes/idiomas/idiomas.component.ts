import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/servicios/idiomas.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  listaIdiomas: any;

  constructor(private idiomasService: IdiomasService) { }

  ngOnInit(): void {
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
