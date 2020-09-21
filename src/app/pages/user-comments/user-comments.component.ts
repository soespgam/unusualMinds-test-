import { Component, OnInit } from '@angular/core';
import { UserCommentsService } from '../user-comments/service/user-comments.service'
import { Router, ActivatedRoute } from '@angular/router';
import { comment } from '../../models/comment';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent implements OnInit {
  
  public comments: comment;
  public comment:comment;

  constructor(private router: Router, private activatedroute: ActivatedRoute,
    private userCommentsService: UserCommentsService) {
    this.comments = new comment();
  }

  ngOnInit() {
    this.getComment();
  }

  getComment() {
    this.userCommentsService.getComments().then(
      (data: comment) => {
        this.comments = data;
        console.log(this.comments)
      }).catch((error) => {
        console.log('error', error);
      });
  }

  recepForm(datosInfo:comment){
    this.comment=datosInfo;
    console.log(this.comment)
  }

  enviaDatosForm(){
    this.userCommentsService.createComments(this.comment).then(
      (data:comment)=>{
        this.comment= data;
        console.log("COMMEN", this.comment)
        this.getComment();
      }).catch((error)=>{
        console.log('error',error);
      });
  }
}
