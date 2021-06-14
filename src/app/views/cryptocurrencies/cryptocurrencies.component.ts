import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CryptocurrenciesService } from "../../services/cryptocurrencies.service";

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.css']
})
export class CryptocurrenciesComponent implements OnInit {

  cryptos: any
  public page: number;
  constructor(public cryptocurrenciesService: CryptocurrenciesService) { }

  ngOnInit(): void {
    this.cryptocurrenciesService.updateCryptos().subscribe(data => {
      this.cryptos = data;
    },err =>{
      console.log(err);
    });
    this.cryptocurrenciesService.getAll().subscribe(data => {
      this.cryptos = data
    })
  }
  
  
}
