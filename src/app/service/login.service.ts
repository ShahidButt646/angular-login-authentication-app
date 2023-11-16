import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  _url = 'http://localhost:3000/login';
  constructor(private _http: HttpClient) {}

  login(user: any): Observable<any> {
    return this._http.get(this._url).pipe(catchError(this.errorHandler));
  }
  signUp(user: any): Observable<any> {
    return this._http.post(this._url, user);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
