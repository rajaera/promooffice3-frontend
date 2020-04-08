import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private _loginUrl = "https://api.github.com/users/koushikkothagal";

  constructor(private http : HttpClient) { }

  loginUser(user) {
    
    if (user) {
      if (user.email === 'rajaera@gmail.com' && user.password == '1982') {
        localStorage.setItem('promoToken',JSON.stringify(user));
        return true;
      }       
    }

    localStorage.removeItem('promoToken');
    return false;
  }

  loggedIn(){
    return !!localStorage.getItem('promoToken');
  }

  auther(){
    return JSON.parse(localStorage.getItem('promoToken'));
  }

  logOut(){
    localStorage.removeItem('promoToken');
    return true;
  }


}
