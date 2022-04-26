import { Injectable } from '@angular/core';
import {HttpService} from "@members/core/services/api/http.service";
import {GeolocationUrl} from "@members/config/url.config";
import {map} from "rxjs/operators";
import {CountryModel} from "@members/core/models/geolocation/country.model";
import {Store} from "@ngrx/store";
import {UserModel} from "@members/core/models/user.model";
import {setCountries} from "@members/core/store/actions/core/geolocation/countries.action";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpService, private store: Store<{countries: CountryModel[]}>) { }

  getCountries() {
    return this.http.get(GeolocationUrl.getCountries).pipe(map((data: any) => {
      return data.data as CountryModel[];
    })).subscribe((data: CountryModel[])  => {
      this.store.dispatch(setCountries({countries: data}))
    });
  }
}
