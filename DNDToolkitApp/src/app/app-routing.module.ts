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
  }/*,
  {
    path: 'dm',
    component: DMLandingPageComponent,
    data: {
      title: 'DM Landing Page'
    }, 
    resolve: {
      room: SecretResolver
    }
  },
  {
    path: 'dm/encounter',
    component: DMEncounterComponent,
    data: {
      title: 'DM Encounter'
    }
  },
  {
    path: 'player',
    component: PlayerLandingPageComponent,
    data: {
      title: 'Player Landing Page'
    }
  },
  {
    path: 'player/encounter',
    component: PlayerEncounterComponent,
    data: {
      title: 'Player Encounter'
    }
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
