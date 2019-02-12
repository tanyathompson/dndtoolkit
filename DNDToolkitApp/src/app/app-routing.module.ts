import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent, DMViewComponent, PlayerViewComponent, LoginComponent, DashboardComponent, DmDashboardComponent } from './views';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent,
    data: {
      title: 'DNDToolkitApp'
    }
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dm-dashboard',
    component: DmDashboardComponent
  },
  {
    path:'',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
