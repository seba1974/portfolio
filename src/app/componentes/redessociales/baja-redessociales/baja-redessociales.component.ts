import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedesSociales } from 'src/app/Models/redessociales';
import { RedessocialesService } from 'src/app/servicios/redessociales.service';

@Component({
  selector: 'app-baja-redessociales',
  templateUrl: './baja-redessociales.component.html',
  styleUrls: ['./baja-redessociales.component.css']
})
export class BajaRedessocialesComponent implements OnInit {

  id: string = "";
  redsocialActual: RedesSociales =
    {
       red: '', link: '', imagen: ''
    };

  constructor(private redessocialesService: RedessocialesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.redessocialesService.obtenerUnaRedSocial(this.id).subscribe(
      res => { this.redsocialActual = res },
      err => console.log(err)
    );
  }

  borrar() {
    this.redessocialesService.borrarUnaRedSocial(this.id).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }
}
