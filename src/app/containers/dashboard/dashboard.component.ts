import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CountriesService } from '../../services/countries.service'
import { LoginService } from '../../services/login.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data
  private token:string;
  public errorMessage:string
  public working:boolean = false

  constructor(
    private countriesService : CountriesService,
    private loginService : LoginService,
    private router: Router
  ) { 
    this.token = this.loginService.getToken()
    this.loadData();

  }

  toogleWorking(){
    this.working = (!this.working)
  }

  loadData(){
    this.data = this.countriesService.get(this.token).pipe(
      map( (response:any)=>{
        return response.map((item)=>{
          return {
            name : item.name,
            value : item.population
          }
        })
      } 
    ));
  }

  ngOnInit() {
    
  }

  addItem(data){
    this.toogleWorking()
    this.countriesService.post(data, this.token).subscribe(
      (response)=>{
        this.toogleWorking()
        this.loadData()
      }
    );
  }

  logout():void{
    this.loginService.logout(this.token).subscribe(
      (response)=>{
        this.loginService.removeToken()
        this.router.navigate(['']);
      }
    )
  }

}
