import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'members-profile-box',
  templateUrl: './profile-box.component.html',
  styleUrls: ['./profile-box.component.scss']
})
export class ProfileBoxComponent implements OnInit {
  @Input() title: string = "";
  @Input() subTitle: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
