import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn():boolean{
    const token = sessionStorage.getItem('user')
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
