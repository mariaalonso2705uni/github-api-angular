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
  details = [];

  constructor(private organizationService: OrganizationService) { }

  ngOnInit() {
  }

  getOrganizationDetails() {
    this.organizationService.getOrganization(this.login).subscribe(
      (result) => {
        this.details = result;
      }
    );
  }


}
