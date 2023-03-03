import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AirlinesComponent } from './airlines/airlines.component';
import { PassengersComponent } from './passengers/passengers.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { SinglePassengerComponent } from './single-passenger/single-passenger.component';
import { SinglePassenegerResolverService } from '../single-passenger-resolver.service';

const routes: Routes = [
  { path: '', component: AirlinesComponent },
  { path: 'passengers', component: PassengersComponent },
  {
    path: 'single-passenger/:id', component: SinglePassengerComponent,
    resolve: {
      singlePassengerResolver: SinglePassenegerResolverService
    }
  }
];

@NgModule({
  declarations: [
    AirlinesComponent,
    PassengersComponent,
    SinglePassengerComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class AirlinesModule { }
