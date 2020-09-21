import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormCommentComponent} from'../form-comment.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormCommentComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports:[
    FormCommentComponent
  ]
})
export class FormCommentModule { }
