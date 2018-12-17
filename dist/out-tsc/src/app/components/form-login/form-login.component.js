var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from 'events';
var FormLoginComponent = /** @class */ (function () {
    function FormLoginComponent(fb) {
        this.fb = fb;
        this.loginSuccess = new EventEmitter();
        this.loginError = new EventEmitter();
    }
    FormLoginComponent.prototype.ngOnInit = function () {
        this.formLogin = this.fb.group({
            email: new FormControl('', [Validators.email]),
            password: new FormControl('', [Validators.required]),
        });
    };
    FormLoginComponent.prototype.submitHandler = function () {
        this.loginSuccess.emit({
            success: true
        });
        console.log(this.formLogin.value);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormLoginComponent.prototype, "loginSuccess", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], FormLoginComponent.prototype, "loginError", void 0);
    FormLoginComponent = __decorate([
        Component({
            selector: 'app-form-login',
            templateUrl: './form-login.component.html',
            styleUrls: ['./form-login.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], FormLoginComponent);
    return FormLoginComponent;
}());
export { FormLoginComponent };
//# sourceMappingURL=form-login.component.js.map