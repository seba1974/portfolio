import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SrvdataService {

  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>
  {
    return this.http.get('./assets/data/porfolio.json'); /* aca va la url de la bd*/
  }
  borrarDatos():Observable<any>
  {
    return this.http.delete('localhost:3306/porfolio'); /**********Para MAÑANA***************** */
  }
/*  crearDatos():Observable<any>
  {
    return this.http.put ( '../assets/data/porfolio.json' );

  }
  modificarDatos():Observable<any>
  {
    return this.http.post ( './assets/data/experiencia.json' );

  }*/ 
}
