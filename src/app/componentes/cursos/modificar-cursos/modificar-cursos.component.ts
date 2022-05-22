import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/Models/cursos';
import { CursosService } from 'src/app/servicios/cursos.service';

@Component({
  selector: 'app-modificar-cursos',
  templateUrl: './modificar-cursos.component.html',
  styleUrls: ['./modificar-cursos.component.css']
})
export class ModificarCursosComponent implements OnInit {

  id: string = "";
  cursoActual: Cursos =
    {
      anio: '', curso: '', dictado_por: ''
    };

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.cursosService.obtenerUnCurso(this.id).subscribe(
      res => { this.cursoActual = res },
      err => console.log(err)
    );
  }

  guardar() {
    this.cursosService.editarCurso(this.id, this.cursoActual).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }
}
