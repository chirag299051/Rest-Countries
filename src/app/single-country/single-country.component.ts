import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { RestService } from '../rest.service';
import { RestHttpService } from '../rest-http.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css'],
  providers: [Location]
})
export class SingleCountryComponent implements OnInit {

  public currentCountry;

  constructor(private _route: ActivatedRoute, private router: Router, public restHttpService: RestHttpService, private location: Location) { }

  ngOnInit() {

    console.log("single country ngOnInit called")
    let Country = this._route.snapshot.paramMap.get('name');
    console.log(Country)
    this.restHttpService.getSingleCountry(Country).subscribe(
      data => {
        console.log(data);
        this.currentCountry = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

  goBackToPreviousPage(): any {

    this.location.back();

  }

}
