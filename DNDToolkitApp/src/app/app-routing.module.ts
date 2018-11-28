import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombatantListComponent, EncounterListComponent, NewCombatantComponent, NewEncounterComponent } from './views';
import { CombatantResolver, EncounterResolver } from './resolvers';

const routes: Routes = [
  {
    path: 'new/combatant',
    component: NewCombatantComponent,
    data: {
      title: 'New Combatant'
    }//,
    // resolve: {
    //   ??
    // }
  },
  {
    path: 'new/encounter',
    component: NewEncounterComponent,
    data: {
      title: 'New Encounter'
    }//,
    // resolve: {
    //   ??
    // }
  },
  {
    path: 'list/combatants',
    component: CombatantListComponent,
    data: {
      title: 'List Combatants'
    },
    resolve: {
      combatantList: CombatantResolver
    }
  },
  {
    path: 'list/encounters',
    component: EncounterListComponent,
    data: {
      title: 'List Encounters'
    },
    resolve: {
      encounterList: EncounterResolver,
      combatantList: CombatantResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
