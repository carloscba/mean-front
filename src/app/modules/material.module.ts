import { NgModule } from'@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatSelectModule,
  MatProgressBarModule,
  MatIconModule,
  MatBadgeModule
];

@NgModule({
  imports: modules,
  exports: modules
 })

 export class MaterialModule {}