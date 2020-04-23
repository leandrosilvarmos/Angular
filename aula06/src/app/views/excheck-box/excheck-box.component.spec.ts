import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcheckBoxComponent } from './excheck-box.component';

describe('ExcheckBoxComponent', () => {
  let component: ExcheckBoxComponent;
  let fixture: ComponentFixture<ExcheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
