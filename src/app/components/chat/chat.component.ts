import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() nameCrypto;
  @Input() nameUser;
  messages : any;
  constructor(public messagesService : MessagesService) { }

  ngOnInit(): void {
    this.messagesService
  }

}
