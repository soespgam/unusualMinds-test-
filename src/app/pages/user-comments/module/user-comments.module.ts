import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCommentsComponent } from '../user-comments.component';
import { UserCommentsRoutingModule } from './user-comments-routing.module';
import { NavbarModule } from 'src/app/components/navbar/module/navbar.module';
import { CommentModule } from 'src/app/components/comment/module/comment.module';
import { TaskModule } from 'src/app/components/task/module/task.module';

@NgModule({
  declarations: [UserCommentsComponent],
  imports: [
    CommonModule,
    UserCommentsRoutingModule,
    NavbarModule,
    CommentModule,
    TaskModule
  ],
  exports: [
    UserCommentsComponent
  ]
})
export class UserCommentsModule { }
