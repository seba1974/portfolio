import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../Models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  loginURL = "http://localhost:8080/login";
  
  constructor(private http:HttpClient) { }

  //iniciarSesion(){}login : Login):Observable<any> {
//    return this.http.post <Login[]>(this.loginURL + '/validar', login);

   // const response = await fetch ('login/validar'), {

  //  }
  //}
  
  obtenerLogin():Observable<Login[]>  {
    return this.http.get <Login[]>(this.loginURL + '/lista'); /* aca va la url del BackEnd sacar la tabla de el component.ts*/
  }
  
  obtenerUnLogin(mail: string):Observable<any> {
    return this.http.get(this.loginURL + '/detail/' + mail);
  }
  
  editarLogin(mail:string, login : Login):Observable<any> {
    return this.http.put(this.loginURL + '/modificar/' + mail, login);
  }
  
  borrarLogin(mail: string):Observable<any>  {
    return this.http.delete <Login[]>(this.loginURL + '/borrar/' +  mail); 
  }
  
  crearLogin(login : Login):Observable<any> {
    return this.http.post <Login[]>(this.loginURL + '/crear', login);
  }
}
