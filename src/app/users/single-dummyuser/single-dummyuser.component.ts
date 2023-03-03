import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DummyUsersService } from 'src/app/dummy-users.service';

@Component({
  selector: 'app-single-dummyuser',
  templateUrl: './single-dummyuser.component.html',
  styleUrls: ['./single-dummyuser.component.scss']
})
export class SingleDummyuserComponent implements OnInit {

  dummyUserData: any;

  constructor(public dummyUserService: DummyUsersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const idAsString = id;
      this.getSingleDummyUser(idAsString);
    }

    // this.getSingleDummyUser();

    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   const idAsNumber = +id;
    //   this.getSingleDummyUser(idAsNumber);
    // }
  }

  getSingleDummyUser(id: string) {
    this.dummyUserService.getSingleDummyUser(id)
      .subscribe((response: any) => {
        console.log(response);
        this.dummyUserData = response;
        console.log(this.dummyUserData);
      });
  }

  calculateAge(dateOfBirth: string): number {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }
}
