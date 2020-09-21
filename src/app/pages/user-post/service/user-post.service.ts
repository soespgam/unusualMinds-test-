import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserPostService {

  constructor(private http: HttpClient) { }

  getPost(){
    return new Promise((resolve, reject) => {
      this.http.get(environment.endpoints.post).subscribe(
        result => {
          resolve(result);
        },
        err => {
          reject(err)
        });
    });
  }

}
