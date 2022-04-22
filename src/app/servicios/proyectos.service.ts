import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from '../Models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectosURL = "http://localhost:8080/proyectos";
  
  constructor(private http:HttpClient) { }

  obtenerProyectos():Observable<any>  {
    return this.http.get('./assets/data/porfolio.json'); /* funciona*/
  }

/*  obtenerProyectos():Observable<Proyectos[]>  {
    return this.http.get <Proyectos[]>(this.proyectosURL + '/lista'); /* aca va la url de la bd
  }*/ 

  borrarProyectos(id: number):Observable<any>  {
    return this.http.delete <Proyectos[]>(this.proyectosURL + '/borrar'); 
  }
  
  
  /*crearProyectos(id: number, dni: String, ):Observable<any> {
    return this.http.put <Proyectos[]>(this.proyectosURL + '/crear');
  }
  
  
  modificarProyectos(proyectos: Proyectos):Observable<any>  {
    return this.http.post<Proyectos[]> (this.proyectosURL + '/modificar');

  }*/
}
