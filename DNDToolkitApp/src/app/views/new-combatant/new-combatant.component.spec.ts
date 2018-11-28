import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCombatantComponent } from './new-combatant.component';

describe('NewCombatantComponent', () => {
  let component: NewCombatantComponent;
  let fixture: ComponentFixture<NewCombatantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCombatantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCombatantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
