import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listaUsuarios: any;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe(data => {
      console.log(data);
      this.listaUsuarios = data; //nombre de la tabla de la BD o JSON
    })
  }
}