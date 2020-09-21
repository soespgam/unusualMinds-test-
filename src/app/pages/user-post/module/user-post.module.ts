import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModule } from 'src/app/components/navbar/module/navbar.module';

import { UserPostRoutingModule } from './user-post-routing.module';
import{UserPostComponent} from '../user-post.component'
import { PostModule } from 'src/app/components/post/module/post.module';


@NgModule({
  declarations: [UserPostComponent],
  imports: [
    CommonModule,
    UserPostRoutingModule,
    PostModule,
    NavbarModule
  ],
  exports:[UserPostComponent]
})
export class UserPostModule { }
