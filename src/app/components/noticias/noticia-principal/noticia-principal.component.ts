import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { New } from 'src/app/models/new';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-noticia-principal',
  templateUrl: './noticia-principal.component.html',
  styleUrls: ['./noticia-principal.component.css']
})
export class NoticiaPrincipalComponent implements OnInit {

  noticia : any
  noticias : any
  constructor(public newsService : NewsService,  public router: Router) { 
    this.newsService.lastNew().subscribe(data => {
      this.noticias = data;
      this.noticia = this.noticias.data[0]
    })
  }

  ngOnInit(): void {
    
  }

  verNoticia(id){
    this.router.navigate(['/noticias',id]);
  }
}
