import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedesSociales } from 'src/app/Models/redessociales';
import { RedessocialesService } from 'src/app/servicios/redessociales.service';

@Component({
  selector: 'app-modificar-redessociales',
  templateUrl: './modificar-redessociales.component.html',
  styleUrls: ['./modificar-redessociales.component.css']
})
export class ModificarRedessocialesComponent implements OnInit {

  id: string = "";
  redsocialActual: RedesSociales =
    {
      dni: '', red: '', link: '', imagen: ''
    };

  constructor(
    private redsocialService: RedessocialesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.redsocialService.obtenerUnaRedSocial(this.id).subscribe(
      res => { this.redsocialActual = res },
      err => console.log(err)
    );
  }

  guardar() {
    this.redsocialService.editarUnaRedSocial(this.id, this.redsocialActual).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }

}
