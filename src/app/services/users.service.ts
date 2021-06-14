import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
    })
  }
constructor(private http: HttpClient) { }

  
  getAll(): Observable<any>{
    return this.http.get<any>("http://localhost:8000/api/users/all",this.httpOptions);
  }

  register(user):Observable<any>{
    return this.http.post<any>("http://localhost:8000/api/auth/register", user,this.httpOptions);
  }

  login(user):Observable<any>{
    return this.http.post<any>("http://localhost:8000/api/auth/login", user,this.httpOptions);
  }

  refreshToken(user):Observable<any>{
    return this.http.get<any>("http://localhost:8000/api/auth/refresh", user);
  }
}