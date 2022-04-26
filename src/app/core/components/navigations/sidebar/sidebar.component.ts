import { Component, OnInit } from '@angular/core';
import {GroupNavLinks, MainNavCode, NavLinks, userDropdownLinks} from "@members/config/links.config";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'members-navigation-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('contentExpansion', [
      state('expanded', style({
        padding: "12px 0 12px 60px",
        height: '*',
        opacity: 1,
        visibility: 'visible'})),
      state('collapsed', style({
        padding: 0,
        height: '0px',
        opacity: 0,
        visibility: 'hidden'})),
      transition('expanded <=> collapsed',
        animate('300ms cubic-bezier(.37,1.04,.68,.98)')),
    ])
  ]
})
export class SidebarComponent implements OnInit {
  groupLinks: GroupNavLinks[] = userDropdownLinks;
  activeGroups: Set<MainNavCode> = new Set();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.groupLinks.forEach((group: GroupNavLinks) => {
      group.links.forEach((link: NavLinks) => {
        if (link.link === this.router.url) {
          this.activeGroups.add(group.code);
        }
      })
    });
  }

  toggleState(code: MainNavCode) {
    if (this.activeGroups.has(code)) {
      this.activeGroups.delete(code);
    } else {
      this.activeGroups.add(code);
    }
  }

  get url() {
    return this.router.url;
  }
}
