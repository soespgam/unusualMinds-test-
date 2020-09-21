import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import{CommentComponent} from '../comment.component'
import { FormCommentModule } from '../../form-comment/module/form-comment.module';

@NgModule({
  declarations: [CommentComponent],
  imports: [
    CommonModule,
    FormCommentModule
  ],
  exports:[CommentComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CommentModule { }
