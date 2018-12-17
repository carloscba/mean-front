import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-country',
  templateUrl: './form-country.component.html',
  styleUrls: ['./form-country.component.scss']
})
export class FormCountryComponent implements OnInit {
  
  @Input() working:boolean = false;
  @Output() validationSuccess: EventEmitter<object> = new EventEmitter<object>();

  public form
  public countries:any[] = [
    "Germany",
    "England",
    "Italy"
  ]

  constructor(private fb: FormBuilder) { }

  resetForm(event=null){
    (event) && event.preventDefault()
    this.form.reset()
  }

  submitHandler(){
    this.validationSuccess.emit(this.form.value)
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      population: new FormControl('', [Validators.required]),
    });
  }

}
