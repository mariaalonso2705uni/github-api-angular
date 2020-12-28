import { Component, OnInit, ElementRef } from '@angular/core';
import { UserService } from './../services/users.service';
import { FormControl } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

  username: FormControl;
  username2: FormControl;
  countRepositories: any;
  countRepositories2: any;
  repositories = [];
  repositories2 = [];
  status = false;
  status2 = false;
  chart = [];

  constructor(private userService: UserService, private elementRef: ElementRef) { }

  searchUser() {
    this.userService.getUser(this.username).subscribe(
      (result) => {
        this.countRepositories = result.length;
        this.repositories = result;
        this.status = true;
        console.log(this.countRepositories);
        console.log(this.countRepositories2);
        this.displayStats();
      });
  }

  searchUser2() {
    this.userService.getUser(this.username2).subscribe(
      (result2) => {
        this.countRepositories2 = result2.length;
        this.repositories2 = result2;
        this.status2 = true;
        console.log(this.countRepositories);
        console.log(this.countRepositories2);
        this.displayStats();
      });
  }

  displayStats() {
    const htmlRef = this.elementRef.nativeElement.querySelector(`#chartId`);
    this.chart = new Chart(htmlRef, {
      type: 'bar',
      data: {
        labels: ['user1', 'user2'],
        datasets: [{
          label: '# of Repositories',
          data: [this.countRepositories, this.countRepositories2],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)'
          ]
        }]
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
      }
    });
  }
}
