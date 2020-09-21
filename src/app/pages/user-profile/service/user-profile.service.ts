import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  getUser() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.endpoints.user).subscribe(
        result => {
          resolve(result);
        },
        err => {
          reject(err)
        });
    });
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.http.get(environment.endpoints.users).subscribe(
        result=> {
          resolve(result);
        },
        err => {
          reject(err)
        });
    });
  }

  getPhoto(){
    return new Promise((resolve,reject)=>{
      this.http.get(environment.endpoints.photos).subscribe(
        result=>{
          resolve(result);
        },
        err=>{
          reject(err)
        });
    });
  }

  getAlbum(){
    return new Promise((resolve,reject)=>{
      this.http.get(environment.endpoints.albums).subscribe(
        result=>{
          resolve(result);
        },
        err=>{
          reject(err)
        });
    });
  }



}
