import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NodeComponent } from './node/node.component';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { AuthComponent } from './auth/auth.component';
import { VmComponent } from './vm/vm.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'node',
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'node',
    component: NodeComponent,
    canActivate: [
      IsLoggedInGuard
    ]
  },
  {
    path: 'vm',
    component: VmComponent,
    canActivate: [
      IsLoggedInGuard
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [
      IsLoggedInGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
