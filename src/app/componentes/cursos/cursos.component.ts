import { Component, OnInit } from '@angular/core';

import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  listaCursos:any;

  constructor(private datosCursos:CursosService) {  }

  ngOnInit(): void {
    this.datosCursos.obtenerCursos().subscribe(data => {
      console.log(data);
      this.listaCursos = data; //.tblcursos nombre de la tabla de la BD o JSON
    })
  }

}
