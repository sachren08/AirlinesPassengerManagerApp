
import { Component, OnInit } from '@angular/core';
import { DummyUsersService } from 'src/app/dummy-users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  public isOwnerEmpty = true;
  p: number = 1;
  selectedLimit: number = 10;
  ownersList: any;

  constructor(private dummyUsersService: DummyUsersService) { }

  payload = {
    "text": "",
    "image": "",
    "likes": 0,
    "tags": [],
    "owner": ""
  }

  onsubmit() {
    console.log("clicked", this.payload)
    this.dummyUsersService.createData(this.payload).subscribe((res) => {
      console.log(res);
    })
  }

  ngOnInit(): void {
    this.dummyUsersService.getDummyUsersWithoutPagination().subscribe((res: any) => {
      this.ownersList = res.data;
      console.log(this.ownersList)
    })
  }
}



