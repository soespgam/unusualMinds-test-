import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{UserToDoComponent} from '../user-to-do.component'

const routes: Routes = [
  {path:"", component:UserToDoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserToDoRoutingModule { }
