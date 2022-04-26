import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'members-banner-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() text: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
