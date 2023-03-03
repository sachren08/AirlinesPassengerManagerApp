import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {

  constructor(public userServiceService: UserServiceService) { }

  userList: any;
  p: number = 1;
  total: number = 0;

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userServiceService.getUsers(this.p)
      .subscribe((response: any) => {
        console.log(response);
        this.userList = response.data;
        this.total = response.total;
      });
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getUsers();
  }
}
