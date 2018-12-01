import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressEncounterComponent } from './in-progress-encounter.component';

describe('InProgressEncounterComponent', () => {
  let component: InProgressEncounterComponent;
  let fixture: ComponentFixture<InProgressEncounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressEncounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
