import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInitiativeComponent } from './player-initiative.component';

describe('PlayerInitiativeComponent', () => {
  let component: PlayerInitiativeComponent;
  let fixture: ComponentFixture<PlayerInitiativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInitiativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
