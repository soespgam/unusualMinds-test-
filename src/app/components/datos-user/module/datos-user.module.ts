import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosUserComponent } from '../datos-user.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DatosUserComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DatosUserComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DatosUserModule { }
