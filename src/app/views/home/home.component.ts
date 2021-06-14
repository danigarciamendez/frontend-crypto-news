import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  noticias : any;
  constructor(public newsService : NewsService) {
    this.newsService.getAll().subscribe(data => {
      this.noticias = data;
      this.noticias.data.shift();
    })
   }

  ngOnInit(): void {
  }

}
