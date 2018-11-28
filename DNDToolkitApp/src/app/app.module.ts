import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombatantListComponent, EncounterListComponent, NewCombatantComponent, NewEncounterComponent } from './views';
import { CombatantResolver, EncounterResolver } from './resolvers';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CombatantComponent } from './views/combatant/combatant.component';
import { EncounterComponent } from './views/encounter/encounter.component';

@NgModule({
  declarations: [
    AppComponent,
    EncounterListComponent,
    NewEncounterComponent,
    CombatantListComponent,
    NewCombatantComponent,
    CombatantComponent,
    EncounterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CombatantResolver, EncounterResolver],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
