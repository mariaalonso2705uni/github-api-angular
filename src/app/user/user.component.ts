import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/users.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username: FormControl;
  username2: FormControl;
  countRepositories: any;
  repositories = [];
  repositories2 = [];
  status = false;
  status2 = false;

  constructor(private userService: UserService) { }

  ngOnInit() {  }

  searchUser() {
    this.userService.getUser(this.username).subscribe (
      (result) => {
        this.countRepositories = result.length;
        this.repositories = result;
        this.status = true;
      });
  }
  searchUser2() {
    this.userService.getUser(this.username2).subscribe (
      (result2) => {
        this.countRepositories = result2.length;
        this.repositories2 = result2;
        this.status2 = true;
      });
  }
}
