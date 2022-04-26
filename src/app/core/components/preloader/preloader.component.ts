import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  selector: 'members-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  isActive: Observable<boolean>;
  constructor(private store: Store<{preloader: boolean}>) {
    this.isActive = store.select("preloader");
  }

  ngOnInit(): void {
  }

}
