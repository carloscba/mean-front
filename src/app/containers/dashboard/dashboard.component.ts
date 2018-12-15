import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private countriesService : CountriesService ) { }

  data = this.countriesService.get()

  ngOnInit() {
    
  }

  addItem(){
    this.countriesService.add({
      "name": "argentina",
      "value": 120      
    })
  }

}
