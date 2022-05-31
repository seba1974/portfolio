import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/Models/login';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  txtEmail : any;
  txtPassword : any;
  
  constructor(private loginService: LoginService,
              private router: Router) { }
    

  ngOnInit(): void {
  }
/*verificarSesion() : void {
  const login = new Login(this.txtEmail, this.txtPassword)
    this.loginService.iniciarSesion(login).subscribe(
      data => {
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.router.navigate(['/']);

      }
    );
  }*/

}
