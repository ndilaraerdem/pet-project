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
  faUser = faUser;
  faHouse = faHouse;
  faLocationDot = faLocationDot
  faRightFromBracket = faRightFromBracket;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logout() {
    const alert = confirm('Are you sure you want to log out?');
    if (alert) {
      sessionStorage.clear();
      this.router.navigate(['/']);
    }
  }
}
