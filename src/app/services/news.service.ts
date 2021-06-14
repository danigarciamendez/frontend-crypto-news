import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { New } from '../models/new';
import { TokenService } from '../shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
      'Authorization': 'Bearer '+this.tokenService.getToken()
    })
  }
  constructor(private http: HttpClient, public tokenService: TokenService) {
    console.log(this.tokenService.getToken())
   }

  getAll():Observable<New>{
     return this.http.get<New>("http://localhost:8000/api/new",this.httpOptions);
  }

  lastNew():Observable<New>{
    return this.http.get<New>("http://localhost:8000/api/new/last",this.httpOptions);
  }

  findNews(id):Observable<New>{
  return this.http.get<New>("http://localhost:8000/api/cryptocurrencies/find/new/"+id,this.httpOptions);
  }

  findNew(id):Observable<any>{
  return this.http.get<any>("http://localhost:8000/api/new/modify/"+id,this.httpOptions);
  }

  modifyNew(news : New){
    return this.http.post<any>("http://localhost:8000/api/new/modify/"+news.id,news,this.httpOptions);
  }

  deleteNew(id){
    return this.http.post<any>("http://localhost:8000/api/new/delete/"+id,this.httpOptions);
  }

  
}
