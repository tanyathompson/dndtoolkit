import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private simplePasswordAPIURL : string = 'https://www.dinopass.com/password/simple';

  constructor(private http : HttpClient) { }

  getSimplePassword() {
    return this.http.get(this.simplePasswordAPIURL, {responseType: 'text'});
  }
}
