import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'members-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent implements OnInit {
  @Input() title: string|null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
