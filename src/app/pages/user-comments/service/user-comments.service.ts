import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { comment } from 'src/app/models/comment';

@Injectable({
  providedIn: 'root'
})
export class UserCommentsService {

  constructor(private http: HttpClient) { }

  getComments() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.endpoints.comments).subscribe(
        result => {
          resolve(result);
        },
        err => {
          reject(err)
        });
    });
  }

  createComments(commenNew:comment){
    return new Promise((resolve,reject)=>{
      this.http.post(environment.endpoints.newComment,commenNew).subscribe(
        result=>{
          resolve(result);
        },
        err=>{
          reject(err)
        });
    });
    
  }
}
