import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from '../../services/login.service';

export interface Credentials{
  id : string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public errorMessage : string;
  public working : boolean = false;

  constructor(
    private loginService : LoginService,
    private router: Router
  ) { }

  toogleWorking(){
    this.working = (!this.working);
  }

  login(credentials){
    this.toogleWorking();
    this.loginService.login(credentials).subscribe(
      (response:Credentials)=>{

        this.toogleWorking();
        this.loginService.setToken(response.id);
        this.router.navigate(['dashboard']);
      
      },
      (error) => {
        this.toogleWorking();
        this.errorMessage = error.message;
      }
    )
  }

  ngOnInit() {
  }

}
