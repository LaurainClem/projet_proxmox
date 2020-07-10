import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodeComponent } from './node/node.component';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { AuthComponent } from './auth/auth.component';
import { VmComponent } from './vm/vm.component';


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
  },
  {
    path: 'vm',
    component: VmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
