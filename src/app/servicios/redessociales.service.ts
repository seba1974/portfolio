import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RedesSociales } from '../Models/redessociales';

@Injectable({
  providedIn: 'root'
})
export class RedessocialesService {

  redessocialesURL = "http://localhost:8080/redessociales";
  //redessocialesURL = "https://beporfoliosebaveloce.herokuapp.com/redessociales";

  constructor(private http:HttpClient) { }

  obtenerRedesSociales():Observable<RedesSociales[]>  {
    return this.http.get <RedesSociales[]>(this.redessocialesURL + '/lista'); /* aca va la url del BackEnd sacar la tabla de el component.ts*/
  }
  
  obtenerUnaRedSocial(id: string):Observable<any> {
    return this.http.get(this.redessocialesURL + '/detail/' + id);
  }
  
  editarUnaRedSocial(id:string, redessociales : RedesSociales):Observable<any> {
    return this.http.put(this.redessocialesURL + '/modificar/' + id, redessociales);
  }
  
  borrarUnaRedSocial(id: string):Observable<any>  {
    return this.http.delete <RedesSociales[]>(this.redessocialesURL + '/borrar/' +  id); 
  }
  
  crearUnaRedSocial(redessociales : RedesSociales):Observable<any> {
    return this.http.post <RedesSociales[]>(this.redessocialesURL + '/crear', redessociales);
  }

}
