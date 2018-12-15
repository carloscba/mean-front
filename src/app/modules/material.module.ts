import { NgModule } from'@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule
];

@NgModule({
  imports: modules,
  exports: modules
 })

 export class MaterialModule {}