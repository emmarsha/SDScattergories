import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphaDiceComponent } from './alpha-dice.component';

describe('AlphaDiceComponent', () => {
  let component: AlphaDiceComponent;
  let fixture: ComponentFixture<AlphaDiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlphaDiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphaDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
