import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../Models/skills'

@Injectable({
  providedIn: 'root'
})
export class SkillsHardService {

  skills_hardURL = "http://localhost:8080/skills_hard"


  constructor(private http:HttpClient) { }

  obtenerSkills_Hard():Observable<Skills[]>  {
    return this.http.get <Skills[]>(this.skills_hardURL + '/lista'); /* aca va la url de la bd*/
  } 

  obtenerUnSkills_Hard(id: string):Observable<any> {
    return this.http.get(this.skills_hardURL + '/detail/' + id);
  } 
 
  borrarSkill_Hard(id: string):Observable<any>  {
    return this.http.delete <Skills[]>(this.skills_hardURL + '/borrar/' +  id);
  }

  editarSkill_Hard(id:string, skillHard : Skills):Observable<any> {
    return this.http.put(this.skills_hardURL + '/modificar/' + id, skillHard);
  }
  
  crearSkill_Hard(skillHard : Skills):Observable<any> {
    return this.http.post <Skills[]>(this.skills_hardURL + '/crear', skillHard);
  }
}
