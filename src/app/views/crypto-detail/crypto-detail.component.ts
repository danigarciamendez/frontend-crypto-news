import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CryptocurrenciesService } from 'src/app/services/cryptocurrencies.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-crypto-detail',
  templateUrl: './crypto-detail.component.html',
  styleUrls: ['./crypto-detail.component.css']
})
export class CryptoDetailComponent implements OnInit {

  name : String;
  noticias : any;
  cryptos : any;
  id: any;
  price : any;
  constructor(private route: ActivatedRoute ,public newsServices: NewsService, public cryptocurrenciesService: CryptocurrenciesService ) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get("name");
    this.route.params.subscribe((params: Params) => {
      this.name = params.name;
    })

    this.cryptocurrenciesService.getCryptocurrency(this.name).subscribe(data => {
      this.cryptos = data;
      this.id = this.cryptos.data[0].id
      this.price = this.cryptos.data[0].price
      console.log(this.id)
      this.newsServices.findNews(this.id).subscribe(data =>{
        this.noticias = data
        console.log(this.noticias)
      })
    })

    
  }

  

}
