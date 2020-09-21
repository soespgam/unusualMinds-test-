import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfileService } from '../user-profile/service/user-profile.service';
import { user } from '../../models/user'
import { photo } from '../../models/photo';
import {album} from'../../models/album';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  datoButton = {
    type: "",
    text: "post"
  }

  datoButton2 = {
    type: "",
    text: "To-Do"
  }

  public user: user;
  public photo: photo;
  public album:album;
  public photoE = false;
  public datoE = false;

  constructor(private router: Router, private activatedroute: ActivatedRoute, private userProfileService: UserProfileService) {
    this.user = new user();
    this.photo = new photo();
    this.album = new album();

  }

  ngOnInit() {
    this.getUserService()
    this.getPhoto()
    this.getAlbum()
  }

  getUserService() {
    this.userProfileService.getUser().then(
      (data: user) => {
        this.user = data;
        this.datoE = true;
      }).catch((error) => {
        console.log('error', error);
      });
  }

  goPost() {
    this.router.navigate(["/post"]);
  }
  goToDo() {
    this.router.navigate(["/toDo"]);
  }

  getPhoto() {
    this.userProfileService.getPhoto().then(
      (data: photo) => {
        this.photo = data;
        this.photoE = true;
        console.log(this.photo);
      }).catch((error) => {
        console.log('error', error)
      });
  }
  getAlbum() {
    this.userProfileService.getAlbum().then(
      (data: album) => {
        this.album = data;
        console.log(this.album);
      }).catch((error) => {
        console.log('error', error)
      });
  }


}
