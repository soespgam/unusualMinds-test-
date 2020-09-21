import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goHome() {
    this.router.navigateByUrl("/Profile");
  }

  goToDo() {
    this.router.navigateByUrl("/toDo");
  }

  goPost() {
    this.router.navigateByUrl("/post");
  }

}
