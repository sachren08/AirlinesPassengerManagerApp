import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUsers(page: number){
    return this.httpClient.get('https://reqres.in/api/users?page=' + page);
  }

  getSingleUser(id: any){
    return this.httpClient.get('https://reqres.in/api/users/' + id);
  }

}
