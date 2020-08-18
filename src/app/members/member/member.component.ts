import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { Member } from 'src/app/shared/models/member.model';
import { MemberListService } from 'src/app/shared/services/member-list.service';
import { Router } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms';

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

    /**
     * Récupérer l'id de la page en cours si id est dans la liste des Membre
     */
    let memberId: number = parseInt(this.route.snapshot.paramMap.get('id'))
        
    this.member = this.liste.getMemberById(memberId)
    
    if (!this.member){
      //rediriger vers la liste avec le service router
      this.router.navigate(["members"])
    }
  }

  /**
   * Supprimer un membre de la liste
   */
  delete(member: Member) {
    this.liste.deleteMember(member)
    //rediriger vers la liste avec le service router
    this.router.navigate(["members"])
  }
}

