import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cryptocurrency } from 'src/app/models/cryptocurrency';
import { CryptocurrenciesService } from "../../../services/cryptocurrencies.service";

@Component({
  selector: 'app-tabla-gan-per',
  templateUrl: './tabla-gan-per.component.html',
  styleUrls: ['./tabla-gan-per.component.css']
})
export class TablaGanPerComponent implements OnInit {

  cryptocurrencies : any;
  
  crypto : Cryptocurrency;
  percent_24h : number;
  ganadoresActive : boolean;
  perdedoresActive : boolean;


  constructor(public cryptocurrenciesService:CryptocurrenciesService) { }

  ngOnInit(): void {
    
    
        
  }

  ganadores(){
    
    this.cryptocurrenciesService.ganadores().subscribe(data => {
      this.cryptocurrencies = data;
      console.log(this.cryptocurrencies)
    })
    
  }

  perdedores(){
    this.cryptocurrenciesService.getAll()
    this.cryptocurrenciesService.perdedores().subscribe(data => {
      this.cryptocurrencies = data;
    })
  }


}
