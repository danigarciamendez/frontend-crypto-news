import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CryptocurrenciesService } from 'src/app/services/cryptocurrencies.service';

@Component({
  selector: 'app-tabla-cryptos',
  templateUrl: './tabla-cryptos.component.html',
  styleUrls: ['./tabla-cryptos.component.css']
})
export class TablaCryptosComponent implements OnInit {

  cryptos: any
  public page: number;
  constructor(public cryptocurrenciesService: CryptocurrenciesService  ,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cryptocurrenciesService.getAll().subscribe(data => {
      this.cryptos = data
    })
  }
}
