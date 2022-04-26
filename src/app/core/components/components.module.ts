import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloaderComponent} from "@members/core/components/preloader/preloader.component";
import {HeaderComponent} from './header/header.component';
import {MainMenuComponent} from './navigations/main-menu/main-menu.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";
import { MainComponent } from './banners/main/main.component';
import { SidebarComponent } from './navigations/sidebar/sidebar.component';
import {IconsModule} from "@members/core/icons/icons.module";
import { ContentBoxComponent } from './box/content-box/content-box.component';
import { PhoneInputComponent } from './form/input/phone-input/phone-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OtpComponent } from './modals/otp/otp.component';

@NgModule({
  declarations: [
    PreloaderComponent,
    HeaderComponent,
    MainMenuComponent,
    MainComponent,
    SidebarComponent,
    ContentBoxComponent,
    PhoneInputComponent,
    OtpComponent,
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    FontAwesomeModule,
    RouterModule,
    IconsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    PreloaderComponent,
    HeaderComponent,
    MainComponent,
    SidebarComponent,
    ContentBoxComponent,
    PhoneInputComponent,
    OtpComponent
  ]
})
export class ComponentsModule {
}
