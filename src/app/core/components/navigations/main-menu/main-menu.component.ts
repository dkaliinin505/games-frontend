import { Component, OnInit } from '@angular/core';
import {mainNavLinks, NavLinks} from "@members/config/links.config";

@Component({
  selector: 'members-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public links: NavLinks[] = mainNavLinks;

  constructor() { }

  ngOnInit(): void {
    console.log(this.links)
  }

}
