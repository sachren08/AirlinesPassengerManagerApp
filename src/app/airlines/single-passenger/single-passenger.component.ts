import { Component, OnInit } from '@angular/core';
import { AirlinesService } from 'src/app/airlines.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-passenger',
  templateUrl: './single-passenger.component.html',
  styleUrls: ['./single-passenger.component.scss']
})
export class SinglePassengerComponent implements OnInit {

  singlePassengerData: any;

  constructor(public airlinesService: AirlinesService,
     private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // if (id) {
    //   console.log(id);
    //   const idAsString = id;
    //   this.getSinglePassengerDetails(idAsString);
    // }
    console.log("single passenger component initiated");
    this.route.data.subscribe(({ singlePassengerResolver }) => {
      this.singlePassengerData = singlePassengerResolver;
    })
}

  // getSinglePassengerDetails(id: string) {
  //   this.airlinesService.getSinglePassengerDetails(id).subscribe((response: any) => {
  //       console.log(response);
  //       this.singlePassengerData = response;
  //       console.log(this.singlePassengerData);
  //     });
  // }

}
