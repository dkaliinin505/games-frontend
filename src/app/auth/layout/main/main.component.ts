import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";
import {AuthLinks} from "@members/auth/auth.links";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public href: string = "";
  public links = AuthLinks;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((data: any) => {
      this.href = data.url;
    });
  }

  get isSwitchActive(): boolean {
    return this.href === AuthLinks.login || this.href === AuthLinks.register;
  }
}
