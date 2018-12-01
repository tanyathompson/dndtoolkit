import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmInitiativeComponent } from './dm-initiative.component';

describe('DmInitiativeComponent', () => {
  let component: DmInitiativeComponent;
  let fixture: ComponentFixture<DmInitiativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmInitiativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
