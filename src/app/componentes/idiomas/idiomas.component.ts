import { Component, OnInit } from '@angular/core';
import { IdiomasService} from 'src/app/servicios/idiomas.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  listaIdiomas:any;

  constructor(private datosIdiomas:IdiomasService) {  }

  ngOnInit(): void {
    this.datosIdiomas.obtenerIdiomas().subscribe(data => {
          this.listaIdiomas = data; //.tblidiomas nombre de la tabla de la BD o JSON
    })
  }

}
