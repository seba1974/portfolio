import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Idiomas } from '../Models/idiomas';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {


  idiomasURL = "http://localhost:8080/idiomas";
  
  constructor(private http:HttpClient) { }

  obtenerIdiomas():Observable<Idiomas[]>  {
    return this.http.get <Idiomas[]>(this.idiomasURL + '/lista'); /* aca va la url de la bd*/
  } 

  borrarIdiomas(id: number):Observable<any>  {
    return this.http.delete <Idiomas[]>(this.idiomasURL + '/borrar'); 
  }


  /*obtenerIdiomas():Observable<any>  {
    return this.http.get('./assets/data/porfolio.json'); /* funciona*/
  
  /*crearDatos(id: number, dni: String, ):Observable<any> {
    return this.http.put <Cursos[]>(this.cursosURL + '/crear');
  }
  
  
  modificarDatos(cursos: Cursos):Observable<any>  {
    return this.http.post<Cursos[]> (this.cursosURL + '/modificar');

  }*/
}
