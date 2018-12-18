import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//Services
import { CountriesService } from './services/countries.service';
import { LoginService } from './services/login.service';
import { SocketService } from './services/socket.service';
//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { FormCountryComponent } from './components/form-country/form-country.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    DashboardComponent,
    BarChartComponent,
    FormCountryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [
    CountriesService,
    LoginService,
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
