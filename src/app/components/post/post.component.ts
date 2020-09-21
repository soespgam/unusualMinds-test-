import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() datoPost:any;
  
  
  constructor(private router: Router) { }

  ngOnInit() {
    console.log("POST", this.datoPost)
  }

  goPost() {
    this.router.navigateByUrl("/comments");
  }

}
