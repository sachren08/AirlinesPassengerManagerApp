import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class DummyUsersService {

  // apiUrl: string = 'enter-your-api-url';
  // headers = new HttpHeaders().set('app-id', '63dcc744a93a9090e7304e3b');

  constructor(private http: HttpClient) { }

  getDummyUsers(page: number, limit: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', page);
    queryParams = queryParams.append('limit', limit);
    return this.http.get('https://dummyapi.io/data/v1/user', { params: queryParams });
  }

  getDummyUsersWithoutPagination() {
    return this.http.get('https://dummyapi.io/data/v1/user?limit=50');
  }


  getSingleDummyUser(id: string) {
    return this.http.get('https://dummyapi.io/data/v1/user/' + id);
  }

  createData(payload: any) {
    return this.http.post<any>('https://dummyapi.io/data/v1/post/create', payload)
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
