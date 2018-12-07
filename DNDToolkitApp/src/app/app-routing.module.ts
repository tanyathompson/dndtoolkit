import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent, DMViewComponent, PlayerViewComponent } from './views';
import { SecretResolver } from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    data: {
      title: 'DNDToolkitApp'
    }
  },
  {
    path: 'dm',
    component: DMViewComponent,
    data: {
      title: 'DM View'
    }, 
    resolve: {
      room: SecretResolver
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
