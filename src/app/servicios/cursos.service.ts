import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cursos } from '../Models/cursos'

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //cursosURL = "http://localhost:8080/cursos";
  cursosURL = 'https://beporfoliosebaveloce.herokuapp.com/cursos';
  constructor(private http:HttpClient) { }


  
  obtenerCursos():Observable<Cursos[]>  {
    return this.http.get <Cursos[]>(this.cursosURL + '/lista'); /* aca va la url del BackEnd sacar la tabla de el component.ts*/
  }
  
  obtenerUnCurso(id: string):Observable<any> {
    return this.http.get(this.cursosURL + '/detail/' + id);
  }
  
  editarCurso(id:string, cursos : Cursos):Observable<any> {
    return this.http.put(this.cursosURL + '/modificar/' + id, cursos);
  }
  
  borrarCurso(id: string):Observable<any>  {
    return this.http.delete <Cursos[]>(this.cursosURL + '/borrar/' +  id); 
  }
  
  crearCursos(cursos : Cursos):Observable<any> {
    return this.http.post <Cursos[]>(this.cursosURL + '/crear', cursos);
  }
}