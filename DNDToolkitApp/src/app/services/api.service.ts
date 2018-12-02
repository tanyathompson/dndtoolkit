import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.dev';
import { CombatantModel, EncounterModel } from '../models';

@Injectable({
  providedIn: 'root'
})

export class API {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

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

  getEncounterById(id : String): Observable<HttpResponse<EncounterModel>> {
    return this.http.get<EncounterModel>(this.ApiBaseUrl + 'read/encounter/' + id, { observe: 'response'});
  }

  addNewCombatant(combatant: CombatantModel): Observable<CombatantModel> {
    console.log('addNewCombatant on ' + combatant.name)
    return this.http.post<CombatantModel>(this.ApiBaseUrl + 'new/combatant', combatant, this.httpOptions);
  }

  addNewEncounter(encounter: EncounterModel): Observable<EncounterModel> {
    console.log('addNewCombatant on ' + encounter.name)
    return this.http.post<EncounterModel>(this.ApiBaseUrl + 'new/encounter', encounter, this.httpOptions);
  }

  deleteCombatant(id: String): Observable<CombatantModel> {
    return this.http.delete<CombatantModel>(this.ApiBaseUrl + 'delete/combatant/' + id, this.httpOptions);
  };

  updateCombatant(id: String, newCombatant: CombatantModel): Observable<CombatantModel> {
    return this.http.put<CombatantModel>(this.ApiBaseUrl + 'update/combatant/' + id, newCombatant);
  }

  deleteEncounter(id: String): Observable<EncounterModel> {
    return this.http.delete<EncounterModel>(this.ApiBaseUrl + 'delete/encounter/' + id, this.httpOptions);
  };

  updateEncounter(id: String, newEncounter: EncounterModel): Observable<EncounterModel> {
    return this.http.put<EncounterModel>(this.ApiBaseUrl + 'update/encounter/' + id, newEncounter);
  }
}
