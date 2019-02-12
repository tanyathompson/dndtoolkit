import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmDashboardComponent } from './dm-dashboard.component';

describe('DmDashboardComponent', () => {
  let component: DmDashboardComponent;
  let fixture: ComponentFixture<DmDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
