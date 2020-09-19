import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from '../user-profile.component';

import { NavbarModule } from 'src/app/components/navbar/module/navbar.module';
import { DatosUserModule } from 'src/app/components/datos-user/module/datos-user.module';
import { PhotoModule } from 'src/app/components/photo/module/photo.module';
import { ButtonModule } from 'src/app/components/button/module/button.module';



@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    NavbarModule,
    DatosUserModule,
    PhotoModule,
    ButtonModule
  ],
  exports: [UserProfileComponent]
})
export class UserProfileModule { }
