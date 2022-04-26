import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './layout/main/main.component';
import {HomeComponent} from './pages/home/home.component';
import {ComponentsModule} from "@members/core/components/components.module";
import {IndexComponent} from './pages/profile/index/index.component';
import {ProfileComponent} from './layout/profile/profile.component';
import {IconsModule} from "@members/core/icons/icons.module";
import {ProfileBoxComponent} from './components/boxes/profile-box/profile-box.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    IndexComponent,
    ProfileComponent,
    ProfileBoxComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsModule,
    IconsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ]
})
export class MainModule {
}
