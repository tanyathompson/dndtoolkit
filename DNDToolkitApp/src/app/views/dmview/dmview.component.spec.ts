import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DMViewComponent } from './dmview.component';

describe('DMViewComponent', () => {
  let component: DMViewComponent;
  let fixture: ComponentFixture<DMViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DMViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DMViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
