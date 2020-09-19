import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "Profile", loadChildren: () => import('../app/pages/user-profile/module/user-profile.module').then(m => m.UserProfileModule) },
  { path: "post", loadChildren: () => import('../app/pages/user-post/module/user-post.module').then(m => m.UserPostModule) },
  { path: "toDo", loadChildren: () => import('../app/pages/user-to-do/module/user-to-do.module').then(m => m.UserToDoModule) },
  { path: "", loadChildren: () => import('../app/pages/user-profile/module/user-profile.module').then(m => m.UserProfileModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
