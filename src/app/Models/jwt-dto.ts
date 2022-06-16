export class JwtDTO {
    token: string = ""; // agrego la inicializacion en todos
    type: string = "";
    nombreUsuario: string = "";
    authorities: string[] = [];


    constructor() {}
}
