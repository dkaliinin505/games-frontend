import {createAction, props} from "@ngrx/store";
import {CountryModel} from "@members/core/models/geolocation/country.model";

export enum CountriesActions {
  getCountriesList = "[Countries] Get List",
}

export const setCountries = createAction(CountriesActions.getCountriesList, props<{countries: CountryModel[]}>());
