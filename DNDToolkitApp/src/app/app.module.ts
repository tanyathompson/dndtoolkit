import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncounterListComponent } from './encounter-list/encounter-list.component';
import { NewEncounterComponent } from './new-encounter/new-encounter.component';
import { CombatantListComponent } from './combatant-list/combatant-list.component';
import { NewCombatantComponent } from './new-combatant/new-combatant.component';

@NgModule({
  declarations: [
    AppComponent,
    EncounterListComponent,
    NewEncounterComponent,
    CombatantListComponent,
    NewCombatantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
