import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombatantListComponent, EncounterListComponent, NewCombatantComponent, NewEncounterComponent } from './views';
import { CombatantResolver, EncounterResolver } from './resolvers';
import { HttpClientModule } from '@angular/common/http'

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
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CombatantResolver, EncounterResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
