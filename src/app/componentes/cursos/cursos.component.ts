import { Component, OnInit } from '@angular/core';

import { SrvdataService } from 'src/app/servicios/srvdata.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  listaCursos:any;

  constructor(private datosCursos:SrvdataService) {  }

  ngOnInit(): void {
    this.datosCursos.obtenerDatos().subscribe(data => {
      console.log(data);
      this.listaCursos = data.tblcursos; //nombre de la tabla de la BD o JSON
    })
  }

}
