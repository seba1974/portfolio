import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../Models/skills'

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills_hardURL = "http://localhost:8080/skills_hard"
  skills_softURL = "http://localhost:8080/skills_soft"


  constructor(private http:HttpClient) { }



 obtenerSkills_Hard():Observable<Skills[]>  {
    return this.http.get <Skills[]>(this.skills_hardURL + '/lista'); /* aca va la url de la bd*/
  } 

 obtenerSkills_Soft():Observable<Skills[]>  {
    return this.http.get <Skills[]>(this.skills_softURL + '/lista'); /* aca va la url de la bd*/
  }

  borrarSkills(id: number):Observable<any>  {
    return this.http.delete <Skills[]>(this.skills_hardURL + '/borrar'); 
  }

  /*   obtenerSkills():Observable<any>  {
    return this.http.get('./assets/data/porfolio.json'); /* funciona
  }*/
  
  /*crearSkills(id: number, dni: String, ):Observable<any> {
    return this.http.put <Skills[]>(this.skillsURL + '/crear');
  }
  
  
  modificarSkills(skills: Skills):Observable<any>  {
    return this.http.post<Skills[]> (this.skillsURL + '/modificar');

  }*/
}
