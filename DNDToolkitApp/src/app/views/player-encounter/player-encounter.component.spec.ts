import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerEncounterComponent } from './player-encounter.component';

describe('PlayerEncounterComponent', () => {
  let component: PlayerEncounterComponent;
  let fixture: ComponentFixture<PlayerEncounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerEncounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerEncounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
