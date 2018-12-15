import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent,
    DashboardComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
