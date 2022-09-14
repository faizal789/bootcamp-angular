import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin : boolean = false;

  constructor(private router : Router) { }


  login(){
    this.isLogin = true;
  }

  logout(){
    this.isLogin = false;
    this.router.navigate(['apps'])
  }

  isAuthenticated(){
    return this.isLogin;
  }
}
