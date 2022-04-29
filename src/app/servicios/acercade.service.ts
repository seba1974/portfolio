import { Injectable } from '@angular/core';
import { Acercade } from '../Models/acercade';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  acercadeURL = "http://localhost:8080/acercade";

  
  constructor(private http:HttpClient) { }


  obtenerAcercade():Observable<Acercade[]>  {
  return this.http.get <Acercade[]>(this.acercadeURL + '/lista'); /* aca va la url de la bd*/
} 

borrarAcercade(id: number):Observable<any>  {
  return this.http.delete <Acercade[]>(this.acercadeURL + '/borrar'); 
}

/*obtenerAcercade():Observable<any>  {
  return this.http.get('./assets/data/porfolio.json'); /* funciona
}*/
/*crearAcercade(id: number, dni: String, ):Observable<any> {
  return this.http.put <Acercade[]>(this.acercadeURL + '/crear');
}


modificarAcercade(acercade: Acercade):Observable<any>  {
  return this.http.post<Acercade[]> (this.acercadeURL + '/modificar');

}*/
}
