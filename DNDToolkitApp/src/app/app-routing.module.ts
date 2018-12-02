import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombatantComponent, EncounterComponent } from './views';
import { CombatantResolver, EncounterResolver, EncounterByIdResolver } from './resolvers';
import { DefaultComponent } from './views/default/default.component';
import { DmDashboardComponent } from './views/dm-dashboard/dm-dashboard.component';
import { DmInitiativeComponent } from './views/dm-initiative/dm-initiative.component';
import { PlayerInitiativeComponent } from './views/player-initiative/player-initiative.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    data: {
      title: 'DNDToolkitApp'
    }
  },
  {
    path: 'dm/dashboard',
    component: DmDashboardComponent,
    data: {
      title: 'DM Dashboard'
    }
  },
  {
    path: 'dm/dashboard/combatants',
    component: CombatantComponent,
    data: {
      title: 'Combatants'
    },
    resolve: {
      combatantList: CombatantResolver
    }
  },
  {
    path: 'dm/dashboard/encounters',
    component: EncounterComponent,
    data: {
      title: 'Encounters'
    },
    resolve: {
      encounterList: EncounterResolver,
      combatantList: CombatantResolver
    }
  },
  {
    path: 'dm/dashboard/encounters/initiative/:id',
    component: DmInitiativeComponent,
    data: {
      title: 'DM Initiative'
    }, resolve: {
      encounter: EncounterByIdResolver
    }
  },
  {
    path: 'player/:id',
    component: PlayerInitiativeComponent,
    data: {
      title: 'Initiative'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
