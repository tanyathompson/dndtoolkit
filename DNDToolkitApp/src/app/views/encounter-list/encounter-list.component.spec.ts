import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterListComponent } from './encounter-list.component';

describe('EncounterListComponent', () => {
  let component: EncounterListComponent;
  let fixture: ComponentFixture<EncounterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncounterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
