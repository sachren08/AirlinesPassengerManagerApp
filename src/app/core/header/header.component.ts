import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/dataservice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  Name: string = "";
  dob: any = "";
  age: any = "";

  constructor(private dataService : DataService) { }

  ngOnInit(): void {

    this.dataService.dataEmitter.subscribe((customerDetails) => {
      console.log("data received", customerDetails);
     this.Name = customerDetails.name;
     this.dob = customerDetails.dob;
     this.age = customerDetails.age;
    })

  }

}
