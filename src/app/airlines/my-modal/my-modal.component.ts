import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AirlinesService } from 'src/app/airlines.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.scss']
})
export class MyModalComponent implements OnInit {

  @Input() passenger: any;

  constructor(public airlinesService: AirlinesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.passenger);
    // this.getSinglePassengerDetails(this.passenger._id);
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
    // if (id) {
    //   const idAsString = id;
    //   this.getSinglePassengerDetails(idAsString);
    // }
  }
  // getSinglePassengerDetails(id: string) {
  //   this.airlinesService.getSinglePassengerDetails(id).subscribe((response: any) => {
  //     console.log(response);
  //     this.passenger = response;
  //     console.log(this.passenger);
  //   });
  // }

}
