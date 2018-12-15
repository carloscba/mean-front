import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  @Output() loginSuccess = new EventEmitter<object>();
  @Output() loginError = new EventEmitter<object>();
  
  formLogin

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submitHandler(){
    this.loginSuccess.emit({
      success : true
    })
    console.log(this.formLogin.value)
  }  

}
