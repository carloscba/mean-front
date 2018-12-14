import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
