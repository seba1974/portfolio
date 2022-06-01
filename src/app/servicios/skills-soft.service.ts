import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../Models/skills'

@Injectable({
  providedIn: 'root'
})
export class SkillsSoftService {

  skills_softURL = "http://localhost:8080/skills_soft"
  //skills_softURL = "https://beporfoliosebaveloce.herokuapp.com/skills_soft"


  constructor(private http:HttpClient) { }

  obtenerSkills_Soft():Observable<Skills[]>  {
    return this.http.get <Skills[]>(this.skills_softURL + '/lista'); /* aca va la url de la bd*/
  } 

  obtenerUnSkills_Soft(id: string):Observable<any> {
    return this.http.get(this.skills_softURL + '/detail/' + id);
  }

  borrarSkill_Soft(id: string):Observable<any>  {
    return this.http.delete <Skills[]>(this.skills_softURL + '/borrar/' +  id); 
  }

  editarSkill_Soft(id:string, skillSoft : Skills):Observable<any> {
    return this.http.put(this.skills_softURL + '/modificar/' + id, skillSoft);
  }
  
  crearSkill_Soft(skillSoft : Skills):Observable<any> {
    return this.http.post <Skills[]>(this.skills_softURL + '/crear', skillSoft);
  }
}