import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RedesSociales } from 'src/app/Models/redessociales';
import { RedessocialesService } from 'src/app/servicios/redessociales.service';

@Component({
  selector: 'app-modificar-header',
  templateUrl: './modificar-header.component.html',
  styleUrls: ['./modificar-header.component.css']
})
export class ModificarHeaderComponent implements OnInit {
  
  id: string = "";
  redsocialActual: RedesSociales =
    {
      imagen: '', link: '', red: ''
    };

  constructor(
    private redesSocialesService: RedessocialesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.redesSocialesService.obtenerUnaRedSocial(this.id).subscribe(
      res => { this.redsocialActual = res },
      err => console.log(err)
    );
  }

  guardar() {
    this.redesSocialesService.editarUnaRedSocial(this.id, this.redsocialActual).subscribe(
      res => { this.router.navigate(['/']) },
      err => console.log(err)
    );
  }

}
