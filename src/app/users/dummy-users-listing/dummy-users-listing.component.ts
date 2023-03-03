import { Component, OnInit } from '@angular/core';
import { DummyUsersService } from 'src/app/dummy-users.service';

@Component({
  selector: 'app-dummy-users-listing',
  templateUrl: './dummy-users-listing.component.html',
  styleUrls: ['./dummy-users-listing.component.scss']
})
export class DummyUsersListingComponent implements OnInit {

  constructor(public dummyUsersService: DummyUsersService) { }

  dummyUsersList: any;
  p: number = 1;
  total: number = 0;
  selectedLimit: number = 10;

  ngOnInit(): void {
    this.getDummyUsers();
  }

  getDummyUsers() {
    this.dummyUsersService.getDummyUsers(this.p, this.selectedLimit).subscribe((response: any) => {
      console.log(this.selectedLimit);
      this.dummyUsersList = response.data;
      this.total = response.total;
    });
  }

  selectedLimitChange() {
    this.p = 1;
    this.getDummyUsers();
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getDummyUsers();
  }

}
