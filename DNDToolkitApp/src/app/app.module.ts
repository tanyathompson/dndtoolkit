import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombatantResolver, EncounterResolver, EncounterByIdResolver } from './resolvers';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CombatantComponent, EncounterComponent } from './views';
import { DefaultComponent } from './views/default/default.component';
import { DmDashboardComponent } from './views/dm-dashboard/dm-dashboard.component';
import { DmInitiativeComponent } from './views/dm-initiative/dm-initiative.component';
import { PlayerInitiativeComponent } from './views/player-initiative/player-initiative.component';

@NgModule({
  declarations: [
    AppComponent,
    CombatantComponent,
    EncounterComponent,
    DefaultComponent,
    DmDashboardComponent,
    DmInitiativeComponent,
    PlayerInitiativeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CombatantResolver, EncounterResolver, EncounterByIdResolver],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
