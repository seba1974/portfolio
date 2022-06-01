import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../Models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService  {

  experienciaURL = "http://localhost:8080/experiencialaboral";
  //experienciaURL = "https://beporfoliosebaveloce.herokuapp.com/experiencialaboral";
  
  constructor(private http : HttpClient) { }



  obtenerExperiencia():Observable<Experiencia[]>  {
    return this.http.get <Experiencia[]>(this.experienciaURL + '/lista'); /* aca va la url de la bd*/
  } 

  obtenerUnaExperiencia(id: string):Observable<any>  {
    return this.http.get (this.experienciaURL + '/detail/' + id);
  }

  editarExperiencia(id:string, experiencia : Experiencia):Observable<any> {
    return this.http.put(this.experienciaURL + '/modificar/' + id, experiencia);
  }

  borrarExperiencia(id: string):Observable<any>  {
    return this.http.delete <Experiencia[]>(this.experienciaURL + '/borrar/' +  id); 
  }
  
  crearExperiencia(experiencia : Experiencia):Observable<any> {
    return this.http.post <Experiencia[]>(this.experienciaURL + '/crear', experiencia);
  }
  
}
