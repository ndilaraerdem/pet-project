import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getUser } from 'src/app/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userData = getUser();

  constructor(private router: Router) {} // remove if not use

  ngOnInit(): void {} // remove if not use
}
