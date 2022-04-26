import {createReducer, on} from "@ngrx/store";
import {CountryModel} from "@members/core/models/geolocation/country.model";
import {setCountries} from "@members/core/store/actions/core/geolocation/countries.action";

const initialState: CountryModel[] = [];

const _countriesReducer = createReducer(initialState,
  on(setCountries, (state: any, countries: any) => {
    return countries.countries as CountryModel[];
  })
);

export function countriesReducer(state: any, action: any) {
  return _countriesReducer(state, action);
}
