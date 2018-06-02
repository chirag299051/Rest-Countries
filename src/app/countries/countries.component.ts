import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { RestService } from '../rest.service';
import { RestHttpService } from '../rest-http.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public allCountries;

  constructor(private _route: ActivatedRoute, private router: Router, public restHttpService: RestHttpService) { }

  ngOnInit() {

    console.log("countries ngOnInit called")
    let Region = this._route.snapshot.paramMap.get('name');
    console.log(Region)
    this.restHttpService.getCountries(Region).subscribe(
      data => {
        console.log(data);
        this.allCountries = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    

  }

}
