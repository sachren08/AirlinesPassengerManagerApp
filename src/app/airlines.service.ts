import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class AirlinesService {

    constructor(private http: HttpClient) { }

    getAirlinesDetails() {
        return this.http.get(`https://api.instantwebtools.net/v1/airlines`);
    }

    getPassengerDetails(page: number, size: number) {
        let queryParams = new HttpParams();
        queryParams = queryParams.append('page', page);
        queryParams = queryParams.append('size', size);
        return this.http.get('https://api.instantwebtools.net/v1/passenger', { params: queryParams });
    }

    getSinglePassengerDetails(id: any): Observable<any> {
        return this.http.get('https://api.instantwebtools.net/v1/passenger/' + id);
    }

    patchData(reqbody: any, id: string): Observable<any> {
       return this.http.patch('https://api.instantwebtools.net/v1/passenger/' + id, reqbody);
      }
    
      deleteData(id: string): Observable<any> {
        return this.http.delete('https://api.instantwebtools.net/v1/passenger/' + id);
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