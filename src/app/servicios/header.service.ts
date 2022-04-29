import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Header } from '../Models/header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  headerURL = "http://localhost:8080/redessociales";
  acercadeURL = "http://localhost:8080/acercade";

  constructor(private http:HttpClient) { }

  

  obtenerHeader():Observable<Header[]>  {
    return this.http.get <Header[]>(this.headerURL + '/lista'); /* aca va la url de la bd*/
  } 

  borrarHeader(id: number):Observable<any>  {
    return this.http.delete <Header[]>(this.headerURL + '/borrar'); 
  }
  
  /*obtenerHeader():Observable<any>  {
    return this.http.get('./assets/data/porfolio.json'); /* funciona
  }*/
  /*crearHeader(id: number, dni: String, ):Observable<any> {
    return this.http.put <Header[]>(this.headerURL + '/crear');
  }
  
  
  modificarHeader(header: Header):Observable<any>  {
    return this.http.post<Header[]> (this.headerURL + '/modificar');

  }*/
}
