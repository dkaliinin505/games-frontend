import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FacebookComponent} from "@members/core/icons/facebook/facebook.component";
import { TwitterComponent } from './twitter/twitter.component';
import { GoogleComponent } from './google/google.component';
import { ProfileComponent } from './profile/profile.component';
import { MinusComponent } from './minus/minus.component';
import { PlusComponent } from './plus/plus.component';
import { EarningsComponent } from './earnings/earnings.component';
import { PlayComponent } from './play/play.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    FacebookComponent,
    TwitterComponent,
    GoogleComponent,
    ProfileComponent,
    MinusComponent,
    PlusComponent,
    EarningsComponent,
    PlayComponent,
    SettingsComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ],
    exports: [
        FacebookComponent,
        TwitterComponent,
        GoogleComponent,
        ProfileComponent,
        MinusComponent,
        PlusComponent,
        EarningsComponent,
        PlayComponent,
        SettingsComponent,
        UserComponent
    ]
})
export class IconsModule { }
