import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  userData: any;

  constructor(public userServiceService: UserServiceService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   const idAsNumber = +id;
    //   this.getSingleUser(idAsNumber);
    // }
    console.log("single user component initiated");
    this.route.data.subscribe(({ userDetailsResolver }) => {
      this.userData = userDetailsResolver;
    })
  }

  // getSingleUser(id: number) {
  //   this.userServiceService.getSingleUser(id)
  //     .subscribe((response: any) => {
  //       this.userData = response;
  //       console.log(this.userData);
  //     });
  // }
}





