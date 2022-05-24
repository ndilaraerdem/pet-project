import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { } // remove router, constructor and import if not use

  isLoggedIn():boolean{
    const token = sessionStorage.getItem('user')
    if (token) { // you can simplify it to: "return !!token"
      return true;
    } else {
      return false;
    }
  }
}
