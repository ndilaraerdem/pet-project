import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faUser,
  faHouse,
  faRightFromBracket,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  faUser = faUser; // remove if not use
  faHouse = faHouse; // remove if not use
  faLocationDot = faLocationDot // remove if not use
  faRightFromBracket = faRightFromBracket; // remove if not use
  constructor(private router: Router) {}

  ngOnInit(): void {} // remove if not use
  logout() { // add type
    const alert = confirm('Are you sure you want to log out?');
    if (alert) {
      sessionStorage.clear();
      this.router.navigate(['/']);
    }
  }
}
