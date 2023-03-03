import { Component, OnInit } from '@angular/core';
import { AirlinesService } from 'src/app/airlines.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.scss']
})
export class AirlinesComponent implements OnInit {

  constructor(public airlinesService: AirlinesService) { }

  airlinesList: any;

  ngOnInit(): void {
    this.getAirlinesDetails();
  }

  getAirlinesDetails() {
    this.airlinesService.getAirlinesDetails().subscribe((response: any) => {
      console.log(response);
      this.airlinesList = response;
      console.log(this.airlinesList);

    });
  }

}
