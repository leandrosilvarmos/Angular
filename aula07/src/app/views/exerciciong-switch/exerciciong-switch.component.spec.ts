import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciongSwitchComponent } from './exerciciong-switch.component';

describe('ExerciciongSwitchComponent', () => {
  let component: ExerciciongSwitchComponent;
  let fixture: ComponentFixture<ExerciciongSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciciongSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciciongSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
