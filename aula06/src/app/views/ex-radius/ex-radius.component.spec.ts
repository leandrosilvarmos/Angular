import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExRadiusComponent } from './ex-radius.component';

describe('ExRadiusComponent', () => {
  let component: ExRadiusComponent;
  let fixture: ComponentFixture<ExRadiusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExRadiusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExRadiusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
