import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "@members/main/layout/main/main.component";
import {HomeComponent} from "@members/main/pages/home/home.component";
import {ProfileComponent} from "@members/main/layout/profile/profile.component";
import {IndexComponent} from "@members/main/pages/profile/index/index.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: HomeComponent},
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          {path: '', component: IndexComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
