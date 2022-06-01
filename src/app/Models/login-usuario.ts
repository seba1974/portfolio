export class LoginUsuario {
   
    nombreusuario: string;
    password: string;

    constructor(nombreUsuario: string, password: string){
        this.nombreusuario = nombreUsuario;
        this.password = password;
    }
}
