import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Cryptocurrency } from '../models/cryptocurrency';
import { TokenService } from '../shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class CryptocurrenciesService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
      'Authorization': 'Bearer '+this.tokenService.getToken()
    })
  }
  constructor(private http: HttpClient, private tokenService : TokenService) { }

  updateCryptos():Observable<Cryptocurrency>{
    return this.http.get<Cryptocurrency>("http://localhost:8000/api/cryptocurrencies",this.httpOptions);
  }

  getAll():Observable<Cryptocurrency>{
     return this.http.get<Cryptocurrency>("http://localhost:8000/api/cryptocurrencies/all",this.httpOptions);
  }

  ganadores():Observable<Cryptocurrency>{
    return this.http.get<Cryptocurrency>("http://localhost:8000/api/cryptocurrencies/win",this.httpOptions);
  }

  perdedores():Observable<Cryptocurrency>{
    return this.http.get<Cryptocurrency>("http://localhost:8000/api/cryptocurrencies/loser",this.httpOptions);
  }

  buscarNombreCrypto(name):Observable<Cryptocurrency>{
    return this.http.get<Cryptocurrency>("http://localhost:8000/api/cryptocurrencies/search/"+name,this.httpOptions);
  }

  getCryptocurrency(name):Observable<Cryptocurrency>{
    return this.http.get<Cryptocurrency>("http://localhost:8000/api/cryptocurrencies/"+name,this.httpOptions);
  }


  dailyPrice(name):Observable<any>{
    return this.http.get<any>("https://api.coingecko.com/api/v3/coins/"+name+"/market_chart?vs_currency=usd&days=99&interval=daily",this.httpOptions);
  }
  
}
