import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, OnDestroy {

  id : String = 'none';
  subscriptions : Subscription[] = [];

  constructor(private http : HttpService) { }

  ngOnInit() {
    this.subscriptions.push(this.http.getSimplePassword().subscribe(id => {
      this.id = id;
      console.log(id);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    })
  }

}
