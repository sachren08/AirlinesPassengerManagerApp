import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AirlinesService } from './airlines.service';

@Injectable({
  providedIn: 'root'
})
export class SinglePassenegerResolverService implements Resolve<any> {

  constructor(public airlinesService: AirlinesService) { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
      console.log("singlePassengerResolverService initiated");
    return this.airlinesService.getSinglePassengerDetails(route.paramMap.get('id'));
  }
}