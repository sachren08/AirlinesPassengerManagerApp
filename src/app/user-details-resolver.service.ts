import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsResolverService implements Resolve<any> {

  constructor(public userServiceService: UserServiceService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
      console.log("UserDetailsResolverService initiated");
    return this.userServiceService.getSingleUser(route.paramMap.get('id'));
  }
}
