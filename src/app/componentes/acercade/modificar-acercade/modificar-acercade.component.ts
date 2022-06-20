import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/Models/usuarios';

@Component({
  selector: 'app-modificar-acercade',
  templateUrl: './modificar-acercade.component.html',
  styleUrls: ['./modificar-acercade.component.css']
})
export class ModificarAcercadeComponent implements OnInit {
id :string = "";
acercadeActual = Usuarios;
  constructor() { }

  ngOnInit(): void {
  }

}
