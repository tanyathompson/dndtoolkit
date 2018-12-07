import { Injectable } from '@angular/core';
import { HttpService } from '../services';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class SecretResolver implements Resolve<any> {
  constructor(private http: HttpService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.http.getSimplePassword();
  }
}
