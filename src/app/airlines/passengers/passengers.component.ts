import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AirlinesService } from 'src/app/airlines.service';



@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {

  passengersList: any;
  passengersListFiltered: any;
  passengerDetails: any;
  p: number = 1;
  selectedLimit: number = 10;
  total: number = 0;
  showNoResults: boolean = false;
  selectedTripsFilter: string = 'all';
  selectedAirlinesFilter: string = 'allairlines';

  constructor(public airlinesService: AirlinesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPassengerDetails();
  }

  getPassengerDetails() {
    this.airlinesService.getPassengerDetails(this.p, this.selectedLimit).subscribe((response: any) => {
      console.log(this.selectedLimit);
      this.passengersList = response.data;
      this.passengersListFiltered = this.passengersList;
      this.total = response.totalPages;
      this.passengersList.forEach((passenger: any) => {
        passenger.editing = false;
        passenger.newName = passenger.name;
      });
    });
  }

  selectedLimitChange() {
    this.p = 1;
    this.getPassengerDetails();
  }

  pageChangeEvent(event: number) {
    this.p = event;
    this.getPassengerDetails();
  }

  // openModal(passenger: any) {
  //   const modalRef = this.modalService.open(MyModalComponent, { size: 'lg' });
  //   modalRef.componentInstance.passenger = passenger;
  //   console.log(passenger);
  // }

  startEditing(passenger: any) {
    passenger.editing = true;
  }

  saveNewName(passenger: any) {
    console.log(passenger.newName);
    console.log('passenger.newName');
    const reqbody = { name: passenger.newName };
    this.airlinesService.patchData(reqbody, passenger._id).subscribe((response) => {
      console.log(response);
      passenger.name = passenger.newName;
      passenger.editing = false;
    });
  }

  deletePassenger(id: string) {
    this.airlinesService.deleteData(id).subscribe(() => {
      // this.passengersList = this.passengersList.filter((passenger: any) => passenger._id !== id);
      this.getPassengerDetails();
    });
  }

  filterTrips(option: string) {
    if (option === 'all') {
      this.passengersListFiltered = this.passengersList;
    } else if (option === 'lessThan100') {
      this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips < 100);
    } else if (option === '100to200') {
      this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips >= 100 && passenger.trips <= 200);
    } else if (option === 'greaterThan200') {
      this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips > 200);
    }
    this.showNoResults = this.passengersListFiltered.length === 0;
  }

  // onTripsFilterChange(event: Event) {
  //   const target = event.target as HTMLSelectElement;
  //   console.log(target.value);
  //   this.selectedTripsFilter = target.value;
  //   this.filterTrips(this.selectedTripsFilter);
  // }

  // filterAirlines(option: string) {
  //   if (option === 'allairlines') {
  //     this.passengersListFiltered = this.passengersList;
  //   } else if (option === 'Eva Air' || option === 'Cathay Pacific' || option === 'Emirates' || option === 'Qantas') {
  //     this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.airline[0].name == option);
  //   }
  //   this.showNoResults = this.passengersListFiltered.length === 0;
  // }

  // filterAirlines(option: string) {
  //   if (this.selectedTripsFilter === 'all') {
  //     if (option === 'allairlines') {
  //       this.passengersListFiltered = this.passengersList;
  //     } else if (option === 'Eva Air' || option === 'Cathay Pacific' || option === 'Emirates' || option === 'Qantas') {
  //       this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.airline[0].name == option);
  //     }
  //   } else if (this.selectedTripsFilter === 'lessThan100') {
  //     if (option === 'allairlines') {
  //       this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips < 100);
  //     } else if (option === 'Eva Air' || option === 'Cathay Pacific' || option === 'Emirates' || option === 'Qantas') {
  //       this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips < 100 && passenger.airline[0].name == option);
  //     }
  //   } else if (this.selectedTripsFilter === '100to200') {
  //     if (option === 'allairlines') {
  //       this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips >= 100 && passenger.trips <= 200);
  //     } else if (option === 'Eva Air' || option === 'Cathay Pacific' || option === 'Emirates' || option === 'Qantas') {
  //       this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips >= 100 && passenger.trips <= 200 && passenger.airline[0].name == option);
  //     }
  //   } else if (this.selectedTripsFilter === 'greaterThan200') {
  //     if (option === 'allairlines') {
  //       this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips > 200);
  //     } else if (option === 'Eva Air' || option === 'Cathay Pacific' || option === 'Emirates' || option === 'Qantas') {
  //       this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips > 200 && passenger.airline[0].name == option);
  //     }
  //   }
  //   this.showNoResults = this.passengersListFiltered.length === 0;
  // }

  filterPassengers(optionTrips: string, optionAirlines: string) {
    console.log(optionTrips);
    console.log(optionAirlines);
    if (optionTrips === 'all' && optionAirlines === 'allairlines') {
      this.passengersListFiltered = this.passengersList;
    } else if (optionTrips !== 'all' && optionAirlines === 'allairlines') {
      if (optionTrips === 'lessThan100') {
        this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips < 100);
      } else if (optionTrips === '100to200') {
        this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips >= 100 && passenger.trips <= 200);
      } else if (optionTrips === 'greaterThan200') {
        this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips > 200);
      }
    } else if (optionTrips === 'all' && optionAirlines !== 'allairlines') {
      this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.airline[0].name == optionAirlines);
    } else if (optionTrips !== 'all' && optionAirlines !== 'allairlines') {
      if (optionTrips === 'lessThan100') {
        this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips < 100 && passenger.airline[0].name == optionAirlines);
      } else if (optionTrips === '100to200') {
        this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips >= 100 && passenger.trips <= 200 && passenger.airline[0].name == optionAirlines);
      } else if (optionTrips === 'greaterThan200') {
        this.passengersListFiltered = this.passengersList.filter((passenger: any) => passenger.trips > 200 && passenger.airline[0].name == optionAirlines);
      }
    }
    this.showNoResults = this.passengersListFiltered.length === 0;
  }

  onTripsFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedTripsFilter = target.value;
    this.filterPassengers(this.selectedTripsFilter, this.selectedAirlinesFilter);
  }

  onAirlinesFilterChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedAirlinesFilter = target.value;
    this.filterPassengers(this.selectedTripsFilter, this.selectedAirlinesFilter);
  }



  // onAirlinesFilterChange(event: Event) {
  //   const target = event.target as HTMLSelectElement;
  //   this.selectedAirlinesFilter = target.value;
  //   this.filterAirlines(this.selectedAirlinesFilter);
  // }
}
  // openModal(template: TemplateRef<any>, id: string) {
  //   console.log(id);
  //   if (id) {
  //     const idAsString = id;
  //     this.getSinglePassengerDetails(idAsString);
  //   }
  //   this.modalRef = this.modalService.show(template);
  // }

