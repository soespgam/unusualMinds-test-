import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserToDoRoutingModule } from './user-to-do-routing.module';
import{UserToDoComponent} from '../user-to-do.component'

@NgModule({
  declarations: [UserToDoComponent],
  imports: [
    CommonModule,
    UserToDoRoutingModule
  ],
  exports:[
    UserToDoComponent
  ]
})
export class UserToDoModule { }
