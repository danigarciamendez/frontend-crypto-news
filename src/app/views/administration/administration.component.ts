import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NewsService } from "src/app/services/news.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  showNews : boolean;
  showUsers : boolean;
  
  
  constructor(public newsService : NewsService, public usersService : UsersService) { 
    this.showNews = false;
    this.showUsers = false;
    
  }

  ngOnInit(): void {
  }

  seeNews(){
    this.showNews = true;
    this.showUsers = false;
  }
  
  seeUsers(){
    this.showUsers = true;
    this.showNews = false;
  }

  
}
