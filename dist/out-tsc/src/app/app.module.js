var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Modules
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './containers/login/login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map