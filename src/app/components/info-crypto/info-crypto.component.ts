import { createHostListener } from '@angular/compiler/src/core';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Cryptocurrency } from 'src/app/models/cryptocurrency';
import { CryptocurrenciesService } from 'src/app/services/cryptocurrencies.service';

@Component({
  selector: 'app-info-crypto',
  templateUrl: './info-crypto.component.html',
  styleUrls: ['./info-crypto.component.css']
})
export class InfoCryptoComponent implements OnInit, OnChanges {

  @Input() name : String;
  cryptos : any

  constructor(public CryptocurrenciesService : CryptocurrenciesService) { }

  ngOnInit(): void {
    this.CryptocurrenciesService.getCryptocurrency(this.name).subscribe(data => {
      this.cryptos = data;
    
    })
  }
  ngOnChanges(): void{
    this.CryptocurrenciesService.getCryptocurrency(this.name).subscribe(data => {
      this.cryptos = data;
      
    })
  }

}
