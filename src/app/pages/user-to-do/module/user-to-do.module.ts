import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserToDoRoutingModule } from './user-to-do-routing.module';
import{UserToDoComponent} from '../user-to-do.component'
import { TaskModule } from 'src/app/components/task/module/task.module';
import { NavbarModule } from 'src/app/components/navbar/module/navbar.module';

@NgModule({
  declarations: [UserToDoComponent],
  imports: [
    CommonModule,
    UserToDoRoutingModule,
    TaskModule,
    NavbarModule
  ],
  exports:[
    UserToDoComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class UserToDoModule { }
