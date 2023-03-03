import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDummyuserComponent } from './single-dummyuser.component';

describe('SingleDummyuserComponent', () => {
  let component: SingleDummyuserComponent;
  let fixture: ComponentFixture<SingleDummyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDummyuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleDummyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
