import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoComponent } from '../photo.component'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PhotoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PhotoComponent]
})
export class PhotoModule { }
