import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCardComponent } from './no-card.component';

describe('NoCardComponent', () => {
  let component: NoCardComponent;
  let fixture: ComponentFixture<NoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
