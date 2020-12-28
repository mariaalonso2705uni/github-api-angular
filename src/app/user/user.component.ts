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
  countRepositories: any;
  repositories = [];
  status = false;

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
}
