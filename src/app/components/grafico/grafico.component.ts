import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { CryptocurrenciesService } from 'src/app/services/cryptocurrencies.service';
import { createChart } from 'lightweight-charts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit, OnChanges,  AfterViewInit {

  @Input() name : String;
  @Input() price : String;
  priceDaily : any;
  public priceDailyconvert : any;
  
  constructor(public cryptocurrenciesService : CryptocurrenciesService) { }

  ngOnInit(): void {

    this.cryptocurrenciesService.dailyPrice(this.name.toLowerCase()).subscribe(data =>{
        this.priceDaily = data.prices;
        
    })
    
  }

  ngOnChanges(){
    this.cryptocurrenciesService.dailyPrice(this.name.toLowerCase()).subscribe(data =>{
      this.priceDaily = data.prices;

    })
    
    
    
  }

  ngAfterViewInit(){
    this.cryptocurrenciesService.dailyPrice(this.name.toLowerCase()).subscribe(data =>{
      this.priceDaily = data.prices;
      
      const chart = createChart(document.getElementById('grafico'), { width: 620, height: 380 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
        { time: new Date(this.priceDaily[0][0]).toISOString().slice(0, 10), value: this.priceDaily[0][1] },
        { time: new Date(this.priceDaily[1][0]).toISOString().slice(0, 10), value: this.priceDaily[1][1] },
        { time: new Date(this.priceDaily[2][0]).toISOString().slice(0, 10), value: this.priceDaily[2][1] },
        { time: new Date(this.priceDaily[3][0]).toISOString().slice(0, 10), value: this.priceDaily[3][1] },
        { time: new Date(this.priceDaily[4][0]).toISOString().slice(0, 10), value: this.priceDaily[4][1] },
        { time: new Date(this.priceDaily[5][0]).toISOString().slice(0, 10), value: this.priceDaily[5][1] },
        { time: new Date(this.priceDaily[6][0]).toISOString().slice(0, 10), value: this.priceDaily[6][1] },
        { time: new Date(this.priceDaily[7][0]).toISOString().slice(0, 10), value: this.priceDaily[7][1] },
        { time: new Date(this.priceDaily[8][0]).toISOString().slice(0, 10), value: this.priceDaily[8][1] },
        { time: new Date(this.priceDaily[9][0]).toISOString().slice(0, 10), value: this.priceDaily[9][1] },
        { time: new Date(this.priceDaily[10][0]).toISOString().slice(0, 10), value: this.priceDaily[10][1] },
        { time: new Date(this.priceDaily[11][0]).toISOString().slice(0, 10), value: this.priceDaily[11][1] },
        { time: new Date(this.priceDaily[12][0]).toISOString().slice(0, 10), value: this.priceDaily[12][1] },
        { time: new Date(this.priceDaily[13][0]).toISOString().slice(0, 10), value: this.priceDaily[13][1] },
        { time: new Date(this.priceDaily[14][0]).toISOString().slice(0, 10), value: this.priceDaily[14][1] },
        { time: new Date(this.priceDaily[15][0]).toISOString().slice(0, 10), value: this.priceDaily[15][1] },
        { time: new Date(this.priceDaily[16][0]).toISOString().slice(0, 10), value: this.priceDaily[16][1] },
        { time: new Date(this.priceDaily[17][0]).toISOString().slice(0, 10), value: this.priceDaily[17][1] },
        { time: new Date(this.priceDaily[18][0]).toISOString().slice(0, 10), value: this.priceDaily[18][1] },
        { time: new Date(this.priceDaily[19][0]).toISOString().slice(0, 10), value: this.priceDaily[19][1] },
        { time: new Date(this.priceDaily[20][0]).toISOString().slice(0, 10), value: this.priceDaily[20][1] },
        { time: new Date(this.priceDaily[21][0]).toISOString().slice(0, 10), value: this.priceDaily[21][1] },
        { time: new Date(this.priceDaily[22][0]).toISOString().slice(0, 10), value: this.priceDaily[22][1] },
        { time: new Date(this.priceDaily[23][0]).toISOString().slice(0, 10), value: this.priceDaily[23][1] },
        { time: new Date(this.priceDaily[24][0]).toISOString().slice(0, 10), value: this.priceDaily[24][1] },
        { time: new Date(this.priceDaily[25][0]).toISOString().slice(0, 10), value: this.priceDaily[25][1] },
        { time: new Date(this.priceDaily[26][0]).toISOString().slice(0, 10), value: this.priceDaily[26][1] },
        { time: new Date(this.priceDaily[27][0]).toISOString().slice(0, 10), value: this.priceDaily[27][1] },
        { time: new Date(this.priceDaily[28][0]).toISOString().slice(0, 10), value: this.priceDaily[28][1] },
        { time: new Date(this.priceDaily[29][0]).toISOString().slice(0, 10), value: this.priceDaily[29][1] },
        { time: new Date(this.priceDaily[30][0]).toISOString().slice(0, 10), value: this.priceDaily[30][1] },
        { time: new Date(this.priceDaily[31][0]).toISOString().slice(0, 10), value: this.priceDaily[31][1] },
        { time: new Date(this.priceDaily[32][0]).toISOString().slice(0, 10), value: this.priceDaily[32][1] },
        { time: new Date(this.priceDaily[33][0]).toISOString().slice(0, 10), value: this.priceDaily[33][1] },
        { time: new Date(this.priceDaily[34][0]).toISOString().slice(0, 10), value: this.priceDaily[34][1] },
        { time: new Date(this.priceDaily[35][0]).toISOString().slice(0, 10), value: this.priceDaily[35][1] },
        { time: new Date(this.priceDaily[36][0]).toISOString().slice(0, 10), value: this.priceDaily[36][1] },
        { time: new Date(this.priceDaily[37][0]).toISOString().slice(0, 10), value: this.priceDaily[37][1] },
        { time: new Date(this.priceDaily[38][0]).toISOString().slice(0, 10), value: this.priceDaily[38][1] },
        { time: new Date(this.priceDaily[39][0]).toISOString().slice(0, 10), value: this.priceDaily[39][1] },
        { time: new Date(this.priceDaily[40][0]).toISOString().slice(0, 10), value: this.priceDaily[40][1] },
        { time: new Date(this.priceDaily[41][0]).toISOString().slice(0, 10), value: this.priceDaily[41][1] },
        { time: new Date(this.priceDaily[42][0]).toISOString().slice(0, 10), value: this.priceDaily[42][1] },
        { time: new Date(this.priceDaily[43][0]).toISOString().slice(0, 10), value: this.priceDaily[43][1] },
        { time: new Date(this.priceDaily[44][0]).toISOString().slice(0, 10), value: this.priceDaily[44][1] },
        { time: new Date(this.priceDaily[45][0]).toISOString().slice(0, 10), value: this.priceDaily[45][1] },
        { time: new Date(this.priceDaily[46][0]).toISOString().slice(0, 10), value: this.priceDaily[46][1] },
        { time: new Date(this.priceDaily[47][0]).toISOString().slice(0, 10), value: this.priceDaily[47][1] },
        { time: new Date(this.priceDaily[48][0]).toISOString().slice(0, 10), value: this.priceDaily[48][1] },
        { time: new Date(this.priceDaily[49][0]).toISOString().slice(0, 10), value: this.priceDaily[49][1] },
        { time: new Date(this.priceDaily[50][0]).toISOString().slice(0, 10), value: this.priceDaily[50][1] },
        { time: new Date(this.priceDaily[51][0]).toISOString().slice(0, 10), value: this.priceDaily[51][1] },
        { time: new Date(this.priceDaily[52][0]).toISOString().slice(0, 10), value: this.priceDaily[52][1] },
        { time: new Date(this.priceDaily[53][0]).toISOString().slice(0, 10), value: this.priceDaily[53][1] },
        { time: new Date(this.priceDaily[54][0]).toISOString().slice(0, 10), value: this.priceDaily[54][1] },
        { time: new Date(this.priceDaily[55][0]).toISOString().slice(0, 10), value: this.priceDaily[55][1] },
        { time: new Date(this.priceDaily[56][0]).toISOString().slice(0, 10), value: this.priceDaily[56][1] },
        { time: new Date(this.priceDaily[57][0]).toISOString().slice(0, 10), value: this.priceDaily[57][1] },
        { time: new Date(this.priceDaily[58][0]).toISOString().slice(0, 10), value: this.priceDaily[58][1] },
        { time: new Date(this.priceDaily[59][0]).toISOString().slice(0, 10), value: this.priceDaily[59][1] },
        { time: new Date(this.priceDaily[60][0]).toISOString().slice(0, 10), value: this.priceDaily[60][1] },
        { time: new Date(this.priceDaily[61][0]).toISOString().slice(0, 10), value: this.priceDaily[61][1] },
        { time: new Date(this.priceDaily[62][0]).toISOString().slice(0, 10), value: this.priceDaily[62][1] },
        { time: new Date(this.priceDaily[63][0]).toISOString().slice(0, 10), value: this.priceDaily[63][1] },
        { time: new Date(this.priceDaily[64][0]).toISOString().slice(0, 10), value: this.priceDaily[64][1] },
        { time: new Date(this.priceDaily[65][0]).toISOString().slice(0, 10), value: this.priceDaily[65][1] },
        { time: new Date(this.priceDaily[66][0]).toISOString().slice(0, 10), value: this.priceDaily[66][1] },
        { time: new Date(this.priceDaily[67][0]).toISOString().slice(0, 10), value: this.priceDaily[67][1] },
        { time: new Date(this.priceDaily[68][0]).toISOString().slice(0, 10), value: this.priceDaily[68][1] },
        { time: new Date(this.priceDaily[69][0]).toISOString().slice(0, 10), value: this.priceDaily[69][1] },
        { time: new Date(this.priceDaily[70][0]).toISOString().slice(0, 10), value: this.priceDaily[70][1] },
        { time: new Date(this.priceDaily[71][0]).toISOString().slice(0, 10), value: this.priceDaily[71][1] },
        { time: new Date(this.priceDaily[72][0]).toISOString().slice(0, 10), value: this.priceDaily[72][1] },
        { time: new Date(this.priceDaily[73][0]).toISOString().slice(0, 10), value: this.priceDaily[73][1] },
        { time: new Date(this.priceDaily[74][0]).toISOString().slice(0, 10), value: this.priceDaily[74][1] },
        { time: new Date(this.priceDaily[75][0]).toISOString().slice(0, 10), value: this.priceDaily[75][1] },
        { time: new Date(this.priceDaily[76][0]).toISOString().slice(0, 10), value: this.priceDaily[76][1] },
        { time: new Date(this.priceDaily[77][0]).toISOString().slice(0, 10), value: this.priceDaily[77][1] },
        { time: new Date(this.priceDaily[78][0]).toISOString().slice(0, 10), value: this.priceDaily[78][1] },
        { time: new Date(this.priceDaily[79][0]).toISOString().slice(0, 10), value: this.priceDaily[79][1] },
        { time: new Date(this.priceDaily[80][0]).toISOString().slice(0, 10), value: this.priceDaily[80][1] },
        { time: new Date(this.priceDaily[81][0]).toISOString().slice(0, 10), value: this.priceDaily[81][1] },
        { time: new Date(this.priceDaily[82][0]).toISOString().slice(0, 10), value: this.priceDaily[82][1] },
        { time: new Date(this.priceDaily[83][0]).toISOString().slice(0, 10), value: this.priceDaily[83][1] },
        { time: new Date(this.priceDaily[84][0]).toISOString().slice(0, 10), value: this.priceDaily[84][1] },
        { time: new Date(this.priceDaily[85][0]).toISOString().slice(0, 10), value: this.priceDaily[85][1] },
        { time: new Date(this.priceDaily[86][0]).toISOString().slice(0, 10), value: this.priceDaily[86][1] },
        { time: new Date(this.priceDaily[87][0]).toISOString().slice(0, 10), value: this.priceDaily[87][1] },
        { time: new Date(this.priceDaily[88][0]).toISOString().slice(0, 10), value: this.priceDaily[88][1] },
        { time: new Date(this.priceDaily[89][0]).toISOString().slice(0, 10), value: this.priceDaily[89][1] },
        { time: new Date(this.priceDaily[90][0]).toISOString().slice(0, 10), value: this.priceDaily[90][1] },
        { time: new Date(this.priceDaily[91][0]).toISOString().slice(0, 10), value: this.priceDaily[91][1] },
        { time: new Date(this.priceDaily[92][0]).toISOString().slice(0, 10), value: this.priceDaily[92][1] },
        { time: new Date(this.priceDaily[93][0]).toISOString().slice(0, 10), value: this.priceDaily[93][1] },
        { time: new Date(this.priceDaily[94][0]).toISOString().slice(0, 10), value: this.priceDaily[94][1] },
        { time: new Date(this.priceDaily[95][0]).toISOString().slice(0, 10), value: this.priceDaily[95][1] },
        { time: new Date(this.priceDaily[96][0]).toISOString().slice(0, 10), value: this.priceDaily[96][1] },
        { time: new Date(this.priceDaily[97][0]).toISOString().slice(0, 10), value: this.priceDaily[97][1] },
        { time: new Date(this.priceDaily[98][0]).toISOString().slice(0, 10), value: this.priceDaily[99][1] },
        
        
        
        
    ]);
    })
    
    
  }

}
