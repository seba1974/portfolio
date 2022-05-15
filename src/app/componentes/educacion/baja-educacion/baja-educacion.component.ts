import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/Models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-baja-educacion',
  templateUrl: './baja-educacion.component.html',
  styleUrls: ['./baja-educacion.component.css']
})
export class BajaEducacionComponent implements OnInit {

  id:string="";
  educacionActual : Educacion = {dni:'', institucion:'',titulo:'', imagen:'', estado:'', promedio:'', anio_inicio:'', anio_fin:''};

  constructor(private educacionService : EducacionService,
    private activatedRouter : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {

    this.id = this.activatedRouter.snapshot.params['id'];
  this.educacionService.obtenerUnaEducacion(this.id).subscribe(
    res => {this.educacionActual=res},
    err=> console.log(err)
    );
  }

  borrar(){
    this.educacionService.borrarEducacion(this.id).subscribe(
      res => {this.router.navigate(['/'])},
      err=> console.log(err)  
    );
  }
}
