import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from '../../shared/jwt.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  err = null;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public jwtService: JwtService,
    public userServices : UsersService
  ) {
    this.signupForm = this.fb.group({
      name: ['javi'],
      email: ['javi@gmail.com'],
      password: ['password'],
      password_confirmation: ['password'],
    })
  }

  ngOnInit() { }

  onSubmit() {
    this.userServices.register(this.signupForm.value).subscribe(
      res => {
        console.log(res)
        this.router.navigate(['noticia']);
      },
      error => {
        this.err = error.error;
        console.log(this.err)
      },
      () => {
        this.signupForm.reset()
        this.router.navigate(['login']);
      }
    )
  }

}