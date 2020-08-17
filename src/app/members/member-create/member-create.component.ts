import { Component, OnInit } from '@angular/core';
import { Member } from './../../shared/models/member.model'
import { MemberListService } from './../../shared/services/member-list.service'
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})

export class MemberCreateComponent implements OnInit {

  //Déclarer un objet de type Membre
  public member: Member = new Member;

  //Instancier la liste des membres et le routing
  constructor(
    private liste: MemberListService,
    private router: Router,
    ) { }

  ngOnInit(): void { }

  //Ajouter un membre de type Membre à la liste des membre 
  createMember(id: Number, lastname: String, firstname: String, role: String) {
    //déclarer le Membre
    let member: Member = {
      id: 0,
      lastName: 'a',
      firstName: 'b',
      role: 'c'
    };

    //ajouter le Membre à la liste
    this.liste.addMember(member)

    //rediriger vers la liste avec le service router
    this.router.navigate(["members"])
  }

}
