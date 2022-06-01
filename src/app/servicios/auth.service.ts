import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../Models/nuevo-usuario';
import { LoginUsuario } from '../Models/login-usuario';
import { JwtDTO } from '../Models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = '//localhost:8080/auth/';
  //authURL = 'https://beporfoliosebaveloce.herokuapp.com/auth';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);    
  }

  public login(loginUsuario : LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);    
  }
}
