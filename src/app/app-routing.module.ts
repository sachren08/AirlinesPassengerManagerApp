import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfileComponent } from './feature/add-profile/add-profile.component';
import { HomeComponent } from './home/home/home.component';
import { UserDetailsResolverService } from './user-details-resolver.service';
import { DummyUsersListingComponent } from './users/dummy-users-listing/dummy-users-listing.component';
import { SingleDummyuserComponent } from './users/single-dummyuser/single-dummyuser.component';
import { SingleUserComponent } from './users/single-user/single-user.component';
import { UsersListingComponent } from './users/users-listing/users-listing.component';
import { AirlinesModule } from './airlines/airlines.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersListingComponent },
  { path: 'dummy-users', component: DummyUsersListingComponent },
  { path: 'add-profile', component: AddProfileComponent },
  {
    path: 'single-user/:id', component: SingleUserComponent,
    resolve: {
      userDetailsResolver: UserDetailsResolverService
    }
  },
  { path: 'single-dummyuser/:id', component: SingleDummyuserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'airlines',
    loadChildren: () => import('./airlines/airlines.module').then(m => m.AirlinesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    AirlinesModule]
})
export class AppRoutingModule { }
