import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';//utility function for react like jQuerry

/*
  Generated class for the PProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PProvider {
  countriesUrl="https://restcountries.eu/rest/v2/all";

  name : any =[];

  constructor(public http: HttpClient) {
    console.log('Hello PProvider Provider');
  }


  getCountryData()
  {
    //observable way "cooler"....
    return this.http.get(this.countriesUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }


  extractData(response)
  {
    // response=this.getCountryData.name;
    return response;
  }
  handleError(error)
  {
    return Observable.throw(error);

  }
}
