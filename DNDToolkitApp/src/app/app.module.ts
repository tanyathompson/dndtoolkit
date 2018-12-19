import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultComponent } from './views';
import { SecretResolver } from './resolvers';
import { DMEncounterComponent } from './views/dmencounter/dmencounter.component';
import { PlayerEncounterComponent } from './views/player-encounter/player-encounter.component';
import { DMLandingPageComponent } from './views/dmlanding-page/dmlanding-page.component';
import { PlayerLandingPageComponent } from './views/player-landing-page/player-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    DMEncounterComponent,
    PlayerEncounterComponent,
    DMLandingPageComponent,
    PlayerLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SecretResolver],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
