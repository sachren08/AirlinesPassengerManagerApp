import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyUsersListingComponent } from './dummy-users-listing.component';

describe('DummyUsersListingComponent', () => {
  let component: DummyUsersListingComponent;
  let fixture: ComponentFixture<DummyUsersListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyUsersListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyUsersListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
