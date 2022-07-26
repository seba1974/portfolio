import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Idiomas } from '../Models/idiomas';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {


  //idiomasURL = "http://localhost:8080/idiomas";
  //idiomasURL = "https://beporfoliosebaveloce.herokuapp.com/idiomas";
  idiomasURL = "https://backend-sebaveloce.herokuapp.com/idiomas";

  constructor(private http:HttpClient) { }

  obtenerIdiomas():Observable<Idiomas[]>  {
    return this.http.get <Idiomas[]>(this.idiomasURL + '/lista'); /* aca va la url del BackEnd sacar la tabla de el component.ts*/
  }
  
  obtenerUnIdioma(id: string):Observable<any> {
    return this.http.get(this.idiomasURL + '/detail/' + id);
  }
  
  editarIdiomas(id:string, idiomas : Idiomas):Observable<any> {
    return this.http.put(this.idiomasURL + '/modificar/' + id, idiomas);
  }
  
  borrarIdiomas(id: string):Observable<any>  {
    return this.http.delete <Idiomas[]>(this.idiomasURL + '/borrar/' +  id); 
  }
  
  crearIdiomas(idiomas : Idiomas):Observable<any> {
    return this.http.post <Idiomas[]>(this.idiomasURL + '/crear', idiomas);
  }
}
