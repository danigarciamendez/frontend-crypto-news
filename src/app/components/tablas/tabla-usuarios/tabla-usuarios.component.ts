import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  
  users : any;
  constructor( public usersService : UsersService) { }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(data => {
      this.users = data
    })
  }

}
