import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  listaCursos: any;

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.obtenerCursos().subscribe(data => {
      console.log(data);
      this.listaCursos = data; //.tblcursos nombre de la tabla de la BD o JSON
    })
  }

  eliminarCursos(id: string) {
    this.cursosService.borrarCurso(id).subscribe
      (
        data => { this.ngOnInit(); },
        err => console.log(err)
      );
  }
}