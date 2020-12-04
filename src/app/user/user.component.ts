import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  username = 'mariaalonso2705uni';
  countRepositories: any;
  repositories = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.searchUser();
  }

  searchUser() {
    this.userService.getUser(this.username).subscribe (
      (result) => {
        this.countRepositories = result.length;
        this.repositories = result;
        console.log(result);
      });
  }
}
