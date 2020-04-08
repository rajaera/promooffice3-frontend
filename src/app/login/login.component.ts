import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    'email' : '',
    'password' : ''
  }

  constructor(private _auth : AuthService, private _router : Router) {
      if (this._auth.loggedIn()) {
        this._router.navigate(['/home']);
      }
   }

  ngOnInit(): void {
  }

  loginUser(){
    
    this._auth.loginUser(this.loginUserData);
    this._router.navigate(['/home']);
  }

}
