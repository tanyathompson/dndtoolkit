import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.dev';
import { CombatantModel, EncounterModel } from '../models';

@Injectable({
  providedIn: 'root'
})

export class API {

  constructor(private http: HttpClient) { }

  get ApiBaseUrl(): string {
    return environment.api_url;
  }

  getCombatants(): Observable<HttpResponse<CombatantModel[]>> {
    return this.http.get<CombatantModel[]>(this.ApiBaseUrl + 'list/combatants', { observe: 'response'});
  }

  getEncounters(): Observable<HttpResponse<EncounterModel[]>> {
    return this.http.get<EncounterModel[]>(this.ApiBaseUrl + 'list/encounters', { observe: 'response'});
  }
}
