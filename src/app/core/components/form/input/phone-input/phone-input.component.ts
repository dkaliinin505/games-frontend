import {Component, Input, OnInit} from '@angular/core';
import {CountryModel} from "@members/core/models/geolocation/country.model";
import {Store} from "@ngrx/store";
import {CountriesService} from "@members/core/services/geolocation/countries/countries.service";
import {AbstractControl, FormControl, Validators} from "@angular/forms";
import parsePhoneNumber from 'libphonenumber-js'


@Component({
  selector: 'members-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss']
})
export class PhoneInputComponent implements OnInit {
  @Input() phoneControl: AbstractControl = new FormControl();

  countries: CountryModel[] = [];
  allCountries: CountryModel[] = [];

  activeCountry: CountryModel | null = null;

  phoneSearch: FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(1)
  ]);

  phone: FormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(1)
  ]);

  constructor(private countriesService: CountriesService, private store: Store<{ countries: CountryModel[] }>) {
    this.getCountries();
  }

  ngOnInit(): void {
    if (this.countries.length === 0) {
      this.countriesService.getCountries().add(() => {
        const numberInfo = parsePhoneNumber(this.phoneControl.value);

        if (numberInfo) {
          const country = this.getCountryByCode(numberInfo.country);

          if (country !== undefined) {
            this.setCountry(country);
            this.phone.setValue(numberInfo.nationalNumber)
          }
        }
      });
    }
  }

  private getCountries() {
    this.store.select("countries").subscribe((data: CountryModel[]) => {
      this.countries = data;
      this.allCountries = data;

      this.activeCountry = data[0];
    });
  }

  search() {
    const searchValue: string = this.phoneSearch.value;

    if (searchValue.length === 0) {
      this.countries = this.allCountries;
    } else {
      this.countries = this.allCountries.filter((country: CountryModel) => {
        return country.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          country.dial_code?.toLowerCase().includes(searchValue.toLowerCase());
      });
    }
  }

  setCountry(country: CountryModel) {
    this.activeCountry = country;

    this.setParentControl();
  }

  phoneChange() {
    this.setParentControl();
  }

  private setParentControl() {
    let phone: string | null = null;

    if (this.phone.value.length > 0) {
      phone = this.activeCountry?.dial_code + this.phone.value;
    }

    this.phoneControl.setValue(phone);
  }

  private getCountryByCode(code: string|undefined): CountryModel|undefined {
    if (code === undefined) {
      return undefined;
    }

    return this.allCountries.find((country: CountryModel) => {
      return country.iso2.toLowerCase() === code.toLowerCase();
    })
  }
}
