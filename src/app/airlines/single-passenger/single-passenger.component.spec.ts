import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePassengerComponent } from './single-passenger.component';

describe('SinglePassengerComponent', () => {
  let component: SinglePassengerComponent;
  let fixture: ComponentFixture<SinglePassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePassengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
