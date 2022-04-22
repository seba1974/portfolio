import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../Models/skills'

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skillsURL = "http://localhost:8080/skills"
  
  constructor(private http:HttpClient) { }

  obtenerSkills():Observable<any>  {
    return this.http.get('./assets/data/porfolio.json'); /* funciona*/
  }

/*  obtenerSkills():Observable<Skills[]>  {
    return this.http.get <Skills[]>(this.skillsURL + '/lista'); /* aca va la url de la bd
  }*/ 

  borrarSkills(id: number):Observable<any>  {
    return this.http.delete <Skills[]>(this.skillsURL + '/borrar'); 
  }
  
  
  /*crearSkills(id: number, dni: String, ):Observable<any> {
    return this.http.put <Skills[]>(this.skillsURL + '/crear');
  }
  
  
  modificarSkills(skills: Skills):Observable<any>  {
    return this.http.post<Skills[]> (this.skillsURL + '/modificar');

  }*/
}
