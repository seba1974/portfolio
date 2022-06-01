import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proyectos } from '../Models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectosURL = "http://localhost:8080/proyectos";
  //proyectosURL = "https://beporfoliosebaveloce.herokuapp.com/proyectos";
  
  constructor(private http:HttpClient) { }

  

  obtenerProyectos():Observable<Proyectos[]>  {
    return this.http.get <Proyectos[]>(this.proyectosURL + '/lista'); /* aca va la url del BackEnd sacar la tabla de el component.ts*/
  }
  
  obtenerUnProyecto(id: string):Observable<any> {
    return this.http.get(this.proyectosURL + '/detail/' + id);
  }
  
  editarProyecto(id:string, proyectos : Proyectos):Observable<any> {
    return this.http.put(this.proyectosURL + '/modificar/' + id, proyectos);
  }
  
  borrarProyecto(id: string):Observable<any>  {
    return this.http.delete <Proyectos[]>(this.proyectosURL + '/borrar/' +  id); 
  }
  
  crearProyecto(proyectos : Proyectos):Observable<any> {
    return this.http.post <Proyectos[]>(this.proyectosURL + '/crear', proyectos);
  }
}
