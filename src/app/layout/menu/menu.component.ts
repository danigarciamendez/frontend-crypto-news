import { Component, OnInit, ViewChild } from '@angular/core';
import { Cryptocurrency } from 'src/app/models/cryptocurrency';
import { CryptocurrenciesService } from 'src/app/services/cryptocurrencies.service';
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  
  nombreCrypto : String
  cryptos : any
  name;
  constructor(public cryptocurrenciesService:CryptocurrenciesService, public router: Router) {
    this.nombreCrypto = '';
    
   }

  ngOnInit(): void {
    this.cryptocurrenciesService.buscarNombreCrypto("%").subscribe(data => {
      this.cryptos = data
      
    })
  }
  

  buscarCripto(){
    this.cryptocurrenciesService.buscarNombreCrypto(this.nombreCrypto).subscribe(data => {
      this.cryptos = data
      
    })
  }

  verCriptomoneda(name: String){
    this.router.navigate(['/criptomonedas',name]);
  }
  

}
