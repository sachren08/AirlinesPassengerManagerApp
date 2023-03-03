import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { SingleUserComponent } from './single-user/single-user.component';
import { DummyUsersListingComponent } from './dummy-users-listing/dummy-users-listing.component';
import { FormsModule } from '@angular/forms';
import { SingleDummyuserComponent } from './single-dummyuser/single-dummyuser.component';
import { PhonePipe } from '../phone.pipe';




@NgModule({
  declarations: [
    UsersListingComponent,
    SingleUserComponent,
    DummyUsersListingComponent,
    SingleDummyuserComponent,
    PhonePipe
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule
  ],
  exports: [UsersListingComponent]
})
export class UsersModule { }
