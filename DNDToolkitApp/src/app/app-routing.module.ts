import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent, DMViewComponent, PlayerViewComponent, LoginComponent } from './views';

const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent,
    data: {
      title: 'DNDToolkitApp'
    }
  },
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'dm',
    component: DMViewComponent,
    data: {
      title: 'DM View'
    }
  },
  {
    path: 'player',
    component: PlayerViewComponent,
    data: {
      title: 'Player View'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
