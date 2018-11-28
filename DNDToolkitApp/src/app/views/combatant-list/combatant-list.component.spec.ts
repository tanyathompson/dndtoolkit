import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatantListComponent } from './combatant-list.component';

describe('CombatantListComponent', () => {
  let component: CombatantListComponent;
  let fixture: ComponentFixture<CombatantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombatantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombatantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
