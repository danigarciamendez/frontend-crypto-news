import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// User interface
export class User {
  name: String;
  email: String;
  password: String;
  password_confirmation: String
}

@Injectable({
  providedIn: 'root'
})

export class JwtService {

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<any> {
    return this.http.post('/api/auth/register', user);
  }

  logIn(user): Observable<any> {
    return this.http.get<any>('http://localhost:8000/api/auth/login', user);
  }

  profile(): Observable<any> {
    return this.http.get('/api/auth/user');
  }

}