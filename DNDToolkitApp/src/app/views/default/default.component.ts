import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy {

  constructor(private http : HttpService) { }

  ngOnInit() {
    sessionStorage.setItem('dmkey', 'default_dmkey')

    this.http.getSimplePassword().subscribe(dmKey => {
      sessionStorage.setItem('dmkey', dmKey);
    })

  }

  ngOnDestroy() {

  }

}
