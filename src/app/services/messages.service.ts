import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
    })
  }
  constructor(private http: HttpClient) { }

  getMessageOfCrypto(id):Observable<Message>{
    return this.http.get<Message>("http://localhost:8000/api/message/"+id,this.httpOptions);
 }

 addMessageOfCrypto(message : Message):Observable<Message>{
  return this.http.post<Message>("http://localhost:8000/api/message/add",message,this.httpOptions);
 }
}
