import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { Member } from 'src/app/shared/models/member.model';
import { MemberListService } from 'src/app/shared/services/member-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  public member: Member;

  constructor(private route: ActivatedRoute,
    private liste: MemberListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //TODO corriger si 0 Member
    //Rediriger vers /members/ si ID n'est pas dans liste

    //Récupérer l'id de la page en cours si id est dans la liste des Membre
    let membreID = this.route.snapshot.paramMap.get('id')
    this.member = this.liste.memberList.find(
      (element: Member) => element.id == parseInt(membreID)
    )
  }
  //Supprimer un membre de la liste
  //TODO ajouter à liste.service
  deleteMember(member: Member) {
    this.liste.memberList.splice(
      this.liste.memberList.indexOf(member), 1)
    //rediriger vers la liste avec le service router
    this.router.navigate(["members"])
  }
}

