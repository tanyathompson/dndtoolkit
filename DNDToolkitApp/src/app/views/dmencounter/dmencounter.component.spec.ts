import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMEncounterComponent } from './dmencounter.component';

describe('DMEncounterComponent', () => {
  let component: DMEncounterComponent;
  let fixture: ComponentFixture<DMEncounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMEncounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
