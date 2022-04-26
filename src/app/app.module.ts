import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from "ng-recaptcha";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpService} from "@members/core/services/api/http.service";
import {AuthTokenService} from "@members/core/services/tokens/auth-token.service";
import {RecaptchaInterceptor} from "@members/core/interceptors/recaptcha.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {authReducer} from "@members/core/store/reducers/user/auth.reducer";
import {preloaderReducer} from "@members/core/store/reducers/core/preloader/preloader.reducer";
import {ComponentsModule} from "@members/core/components/components.module";
import {AuthInterceptor} from "@members/core/interceptors/auth.interceptor";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {countriesReducer} from "@members/core/store/reducers/core/geolocation/countries.reducer";
import {ServerInterceptor} from "@members/core/interceptors/server.interceptor";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    AppRoutingModule,
    RecaptchaV3Module,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({
      authUser: authReducer,
      preloader: preloaderReducer,
      countries: countriesReducer
    }, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    FontAwesomeModule,
  ],
  providers: [
    {provide: RECAPTCHA_V3_SITE_KEY, useValue: environment.recaptcha_key},
    {provide: HTTP_INTERCEPTORS, useClass: RecaptchaInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true},
    HttpService,
    AuthTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
