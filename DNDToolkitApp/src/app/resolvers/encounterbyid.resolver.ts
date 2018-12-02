import { Injectable } from '@angular/core';
import { API } from '../services';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class EncounterByIdResolver implements Resolve<any> {
  constructor(private api: API) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.api.getEncounterById(route.params['id']);
  }
}
