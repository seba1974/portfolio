/*import { Injectable } from '@angular/core';
import { Acercade } from '../Models/acercade';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  acercadeURL = "http://localhost:8080/usuarios";

  
  constructor(private http:HttpClient) { }


  obtenerAcercade():Observable<Acercade[]>  {
  return this.http.get <Acercade[]>(this.acercadeURL + '/lista'); /* aca va la url de la bd
  }

  //editarAcercade(id:string, acercade : Acercade):Observable<any> {
  //return this.http.put(this.acercadeURL + '/modificar/' + id, acercade);
  //}
}*/
