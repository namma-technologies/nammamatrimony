import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../service/data-provider.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  religions=[];
  countries=[];
  castes = [];
  degrees=[];
  jobs=[];
  family_types=[];
  family_statuses=[];
  profileCreatedBy=[];
  raasis = [];
  stars = [];
  doshams = [];
  bodyTypes = [];
  complexions = [];
  maritalStatuses = [];
  codes = [];
  updateClicked = false;
  firstNameText:any;
  lastNameText:any;
  gender:any;
  dobText:any;

  
  constructor(private dps:DataProviderService) { }

  ngOnInit() {
    this.religions = this.dps.religions;
    this.countries = this.dps.countries;
    this.degrees = this.dps.degress;
    this.castes = this.dps.castes;
    this.family_types = this.dps.family_types;
    this.family_statuses = this.dps.family_statuses;
    this.profileCreatedBy = this.dps.profileCreatedBy;
    this.raasis = this.dps.raasis;
    this.stars = this.dps.stars;
    this.doshams = this.dps.doshams;
    this.bodyTypes = this.dps.bodyTypes;
    this.complexions = this.dps.complexions;
    this.maritalStatuses = this.dps.maritalStatuses;
    this.jobs = this.dps.jobs;
    this.codes = this.dps.codes;
  }

  updateUser(form) {
    this.updateClicked = true;
    console.log(form.value);
    if (form.valid) {
      console.log('form is valid');
    } else {
      console.log('form is invalid');
    }
  }


}
