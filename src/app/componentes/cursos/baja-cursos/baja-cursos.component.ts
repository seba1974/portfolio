import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/Models/cursos';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-baja-cursos',
  templateUrl: './baja-cursos.component.html',
  styleUrls: ['./baja-cursos.component.css']
})
export class BajaCursosComponent implements OnInit {

  id: string = "";
  cursoActual: Cursos =
    {
      dni: '', anio: '', curso: '', dictado_por: ''
    };

  constructor(private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.cursosService.obtenerUnCurso(this.id).subscribe(
      res => { this.cursoActual = res },
      err => console.log(err)
    );
  }

  borrar() {
    this.cursosService.borrarCurso(this.id).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }
}
