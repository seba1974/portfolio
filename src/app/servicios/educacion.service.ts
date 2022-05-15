import { Injectable } from '@angular/core';
import { Educacion } from '../Models/educacion';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducacionService { 
  
  educacionURL = "http://localhost:8080/educacion";
  
constructor(private http:HttpClient) { }



obtenerEducacion():Observable<Educacion[]>  {
  return this.http.get <Educacion[]>(this.educacionURL + '/lista'); /* aca va la url del BackEnd sacar la tabla de el component.ts*/
}

obtenerUnaEducacion(id: string):Observable<any> {
  return this.http.get(this.educacionURL + '/detail/'+ id);
}

editarEducacion(id:string, educacion : Educacion):Observable<any>{
  return this.http.put(this.educacionURL + '/modificar/' + id, educacion);
}

borrarEducacion(id: string):Observable<any>  {
  return this.http.delete <Educacion[]>(this.educacionURL + '/borrar/' +  id); 
}


crearEducacion(educacion : Educacion):Observable<any> {
  return this.http.post <Educacion[]>(this.educacionURL + '/crear', educacion);
}

}
