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

/*obtenerEducacion():Observable<any>  {
  return this.http.get('//localhost:3306/porfolio'); /* funciona
}*/

  obtenerEducacion():Observable<Educacion[]>  {
  return this.http.get <Educacion[]>(this.educacionURL + '/lista'); /* aca va la url del BackEnd sacar la tabla de el component.ts*/
} 

borrarEducacion(id: number):Observable<any>  {
  return this.http.delete <Educacion[]>(this.educacionURL + '/borrar'); 
}


/*crearEducacion(id: number, dni: String, ):Observable<any> {
  return this.http.put <Educacion[]>(this.educacionURL + '/crear');
}


modificarEducacion(educacion: Educacion):Observable<any>  {
  return this.http.post<Educacion[]> (this.educacionURL + '/modificar');

}*/
}
