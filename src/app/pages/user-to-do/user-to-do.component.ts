import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserToDoService } from './service/user-to-do.service';
import { task } from '../../models/task';

@Component({
  selector: 'app-user-to-do',
  templateUrl: './user-to-do.component.html',
  styleUrls: ['./user-to-do.component.scss']
})
export class UserToDoComponent implements OnInit {

  public task: task;
  public taskE = false;
 

  constructor(private router: Router, private activatedroute: ActivatedRoute, private userToDoService: UserToDoService) {

    this.task = new task();
  }

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    this.userToDoService.getTask().then(
      (data: task) => {
        this.task = data;
        this.taskE = true;
      }).catch((error) => {
        console.log('error', error);
      });
  }
}
