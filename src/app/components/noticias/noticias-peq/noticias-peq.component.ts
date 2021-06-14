import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias-peq',
  templateUrl: './noticias-peq.component.html',
  styleUrls: ['./noticias-peq.component.css']
})
export class NoticiasPeqComponent implements OnInit {
  
  @Input() id : number;
  @Input() titulo : String;
  @Input() autor : String;
  @Input() categoria : String;
  @Input() fecha : String;

  
  textVisible : boolean
  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  verNoticia(id){
    this.router.navigate(['/noticias',id]);
  }

}
