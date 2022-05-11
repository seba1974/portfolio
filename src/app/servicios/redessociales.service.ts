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
    return this.http.get <RedesSociales[]>(this.redessocialesURL + '/lista');
  }

  borrarCursos(id: number):Observable<any>  {
    return this.http.delete <RedesSociales[]>(this.redessocialesURL + '/borrar'); 
  }

}
