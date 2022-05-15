import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedesSociales } from '../Models/redessociales';

@Injectable({
  providedIn: 'root'
})
export class RedessocialesService {

  redessocialesURL = "http://localhost:8080/redessociales";

  constructor(private http:HttpClient) { }

  obtenerRedesSociales():Observable<RedesSociales[]>  {
    return this.http.get <RedesSociales[]>(this.redessocialesURL + '/lista'); /* aca va la url del BackEnd sacar la tabla de el component.ts*/
  }
  
  obtenerUnaRedesSociales(id: string):Observable<any> {
    return this.http.get(this.redessocialesURL + '/detail/' + id);
  }
  
  editarRedesSociales(id:string, redessociales : RedesSociales):Observable<any> {
    return this.http.put(this.redessocialesURL + '/modificar/' + id, redessociales);
  }
  
  borrarRedesSociales(id: string):Observable<any>  {
    return this.http.delete <RedesSociales[]>(this.redessocialesURL + '/borrar/' +  id); 
  }
  
  crearRedesSociales(redessociales : RedesSociales):Observable<any> {
    return this.http.post <RedesSociales[]>(this.redessocialesURL + '/crear', redessociales);
  }

}
