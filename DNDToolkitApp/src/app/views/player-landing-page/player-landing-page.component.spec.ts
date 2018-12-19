import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLandingPageComponent } from './player-landing-page.component';

describe('PlayerLandingPageComponent', () => {
  let component: PlayerLandingPageComponent;
  let fixture: ComponentFixture<PlayerLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
