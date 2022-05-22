import { Component, OnInit } from '@angular/core';

//import { AcercadeService } from 'src/app/servicios/acercade.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  listaUsuarios:any; // variable 

  constructor(private usuariosService:UsuariosService) { }

  ngOnInit(): void {
    this.usuariosService.obtenerUsuarios().subscribe(data => {
      console.log(data);
      this.listaUsuarios = data; //nombre de la tabla de la BD o JSON
      
    })
  }
  editarAcercade(): void {
    alert ("se va a editar Acerca de...");
    //A RESOLVER  this.acercadeService.editarAcercade(this.listaAcercade.id, listaAcercade);
  }

  editarFoto(): void {
    alert ("se va a editar la Foto...");
  }
}

