import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodeComponent } from './node/node.component';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'node',
  },
  {
    path: 'node',
    component: NodeComponent,
    canActivate: [
      IsLoggedInGuard
    ]
  },
  {
    path: 'login',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
