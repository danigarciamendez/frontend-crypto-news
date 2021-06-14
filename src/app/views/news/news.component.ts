import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  id : any
  news : any
  constructor(private route: ActivatedRoute ,public newsServices: NewsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    
    this.newsServices.findNew(this.id).subscribe(data => {
      this.news = data
      
      this.news = this.news.news
    })

    
  }

}
