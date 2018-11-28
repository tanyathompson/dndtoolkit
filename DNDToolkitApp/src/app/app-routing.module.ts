import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombatantComponent, EncounterComponent } from './views';
import { CombatantResolver, EncounterResolver } from './resolvers';

const routes: Routes = [
  {
    path: 'combatants',
    component: CombatantComponent,
    data: {
      title: 'Combatants'
    },
    resolve: {
      combatantList: CombatantResolver
    }
  },
  {
    path: 'encounters',
    component: EncounterComponent,
    data: {
      title: 'Encounters'
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
