import { Component, OnInit } from '@angular/core';

import { RestService } from '../rest.service';
import { RestHttpService } from '../rest-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allRegions : any = []
  public allCountries;

  constructor(public restHttpService: RestHttpService) { }

  ngOnInit() {
    this.allRegions = ['Africa', 'Americas','Asia', 'Europe', 'Oceania'];
    this.allCountries = this.restHttpService.getAllCountries;
  }

}
