import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CountriesService } from '../../services/countries.service';
import { LoginService } from '../../services/login.service';
import { SocketService } from '../../services/socket.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public data
  private token: string;
  public errorMessage: string
  public working: boolean = false
  public usersOnline: number = 0

  constructor(
    private countriesService: CountriesService,
    private loginService: LoginService,
    private socketService: SocketService,
    private router: Router
  ) {
    this.token = this.loginService.getToken()
    this.loadData();
  }

  toogleWorking() {
    this.working = (!this.working)
  }

  loadData() {
    this.data = this.countriesService.get(this.token).pipe(
      map((response: any) => {
        return response.map((item) => {
          return {
            name: item.name,
            value: item.population
          }
        })
      }
      ));
  }

  ngOnInit() {
    this.socketService.initSocket();
    
    this.socketService.onNewData().subscribe((data: any) => {
      this.loadData()
    });

    this.socketService.onEvent('connect').subscribe(() => {
      console.log('connected');
    });

    this.socketService.onEvent('disconnect').subscribe(() => {
      console.log('disconnected');
    });

  }

  addItem(data) {
    this.toogleWorking()
    this.countriesService.post(data, this.token).subscribe(
      (response) => {
        this.socketService.newData(data)
        this.toogleWorking()
        this.loadData()
      }
    );
  }

  logout(): void {
    this.loginService.logout(this.token).subscribe(
      (response) => {
        this.loginService.removeToken()
        this.router.navigate(['']);
      }
    )
  }

}
