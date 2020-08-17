import { Component, OnInit } from '@angular/core';
import { Member } from './../shared/models/member.model'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
