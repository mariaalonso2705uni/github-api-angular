import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OrganizationService } from './../services/organizations.services';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  login: FormControl;
  login2: FormControl;
  details = [];
  details2 = [];
  status = false;
  status2 = false;

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() { }

  getOrganizationDetails() {
    this.organizationService.getOrganization(this.login).subscribe(
      (result) => {
        this.details = result;
        console.log(this.details);
        this.status = true;
      }
    );
  }

  getOrganizationDetails2() {
    this.organizationService.getOrganization(this.login2).subscribe(
      (result) => {
        this.details2 = result;
        console.log(this.details);
        this.status2 = true;
      }
    );
  }
}
