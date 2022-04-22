import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cursos } from '../Models/cursos'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursosURL = "http://localhost:8080/cursos";
  
  constructor(private http:HttpClient) { }

  obtenerCursos():Observable<any>  {
    return this.http.get('./assets/data/porfolio.json'); /* funciona*/
  }

/*  obtenerCursos():Observable<Cursos[]>  {
    return this.http.get <Cursos[]>(this.cursosURL + '/lista'); /* aca va la url de la bd
  }*/ 

  borrarCursos(id: number):Observable<any>  {
    return this.http.delete <Cursos[]>(this.cursosURL + '/borrar'); 
  }
  
  
  /*crearDatos(id: number, dni: String, ):Observable<any> {
    return this.http.put <Cursos[]>(this.cursosURL + '/crear');
  }
  
  
  modificarDatos(cursos: Cursos):Observable<any>  {
    return this.http.post<Cursos[]> (this.cursosURL + '/modificar');

  }*/
}