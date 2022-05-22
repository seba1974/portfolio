import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cursos } from 'src/app/Models/cursos';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-alta-cursos',
  templateUrl: './alta-cursos.component.html',
  styleUrls: ['./alta-cursos.component.css']
})
export class AltaCursosComponent implements OnInit {
  
  anio: any;
  curso: any;
  dictado_por: any;


  constructor(
    private cursosService: CursosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const cursos = new Cursos(this.anio, this.curso, this.dictado_por)
    this.cursosService.crearCursos(cursos).subscribe(
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
