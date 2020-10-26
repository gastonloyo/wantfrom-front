import { Injectable } from '@angular/core';
import { URL_BACKEND } from 'src/app/config/config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SignupRequest } from '../clases/signup.request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlEndpoint: string;

  constructor(private http: HttpClient) {
    this.urlEndpoint = `${URL_BACKEND}/api/auth`;
  }

  signup(signupRequest: SignupRequest): Observable<any> {
    return this.http.post(`${this.urlEndpoint}/signup`, signupRequest);
  }
}
