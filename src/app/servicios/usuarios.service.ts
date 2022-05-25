import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/login'; //
import { Usuarios } from '../Models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  usuariosURL = "http://localhost:8080/usuarios";
  
  constructor(private http:HttpClient,
              ) { } //private login : Login

  obtenerUsuarios():Observable<Usuarios[]>  {
    return this.http.get <Usuarios[]>(this.usuariosURL + '/lista'); /* aca va la url del BackEnd sacar la tabla de el component.ts*/
  }
  
  obtenerUnUsuario(id: string):Observable<any> {
    return this.http.get(this.usuariosURL + '/detail/' + id);
  }



 

  iniciarSesion(login : Login):Observable<any> {
    return this.http.post <Login[]>('/login', login);
  }


 


  editarUsuario(id : string, usuarios : Usuarios):Observable<any> {
    return this.http.put(this.usuariosURL + '/modificar/' + id, usuarios);
  }
  
  borrarUsuario(id: string):Observable<any>  {
    return this.http.delete <Usuarios[]>(this.usuariosURL + '/borrar/' +  id); 
  }
  
  crearUsuario(usuarios : Usuarios):Observable<any> {
    return this.http.post <Usuarios[]>(this.usuariosURL + '/crear', usuarios);
  }
}
