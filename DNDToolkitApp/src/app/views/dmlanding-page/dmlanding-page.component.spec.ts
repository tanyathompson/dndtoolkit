import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMLandingPageComponent } from './dmlanding-page.component';

describe('DMLandingPageComponent', () => {
  let component: DMLandingPageComponent;
  let fixture: ComponentFixture<DMLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
