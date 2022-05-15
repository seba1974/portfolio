import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../Models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService  {

  experienciaURL = "http://localhost:8080/experiencialaboral";
  
  constructor(private http : HttpClient) { }

  obtenerExperiencia():Observable<Experiencia[]>  {
    return this.http.get <Experiencia[]>(this.experienciaURL + '/lista'); /* aca va la url de la bd*/
  } 

  obtenerUnaExperiencia(id: number):Observable<any>  {
    return this.http.get <Experiencia>(this.experienciaURL + '/detail/${id}'); 
    console.log(Experiencia)
  }

  borrarExperiencia(id: number):Observable<any>  {
    return this.http.delete <any>(this.experienciaURL + '/borrar/${id}'); 
  }
  
  crearExperiencia(experiencia : Experiencia):Observable<any> {
    return this.http.post <Experiencia[]>(this.experienciaURL + '/crear', experiencia);
  }
    
  /*modificarExperiencia(experiencia: Experiencia):Observable<any>  {
    return this.http.post<Experiencia[]> (this.experienciaURL + '/modificar');}*/
  
}
