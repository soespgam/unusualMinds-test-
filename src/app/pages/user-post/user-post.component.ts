import { Component, OnInit } from '@angular/core';
import{UserPostService} from '../user-post/service/user-post.service';
import { Router, ActivatedRoute } from '@angular/router';

import{post}from'../../models/post';



@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  public post:post;
  public postE = false;
 
  constructor(private router: Router, private activatedroute: ActivatedRoute, private userPostService: UserPostService) { 
    this.post = new post();
  }

  ngOnInit() {
    this.getPost()
  }

  getPost(){
    this.userPostService.getPost().then(
      (data: post) => {
        this.post = data;
        this.postE = true;
      }).catch((error) => {
        console.log('error', error);
      });
  }

}
