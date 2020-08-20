import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberListService } from 'src/app/shared/services/member-list.service';
import { Member } from 'src/app/shared/models/member.model';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})

export class MemberListComponent implements OnInit {

  //Déclarer la liste des headers (liste des keys JSON) à afficher sur la vue
  public headers: String[]

  //Déclarer le contenu des colonnes dans la vue (values des JSON)
  public data: String[]

  public memberList: Member[];

  public member: Member = new Member

  //Instancier la liste des membre et le routage
  constructor(
    public liste: MemberListService,
    private router: Router,
    
  ) {
    this.liste.get().subscribe(
      (memberList: Member[]) => this.memberList = memberList,
      (error) => console.error("Error", error)
    );
   }

  ngOnInit(): void {

    
    //TODO corriger si 0 Member

    //Récupérer les values de la classe Membre
    //this.data = Object.values(this.liste)[0];
    
    //Récupérer les keys de la classe Membre
    //this.headers = Object.keys(this.data[0]); 
  }
  //Router vers le membre qu'on a clické 
  select(member: Member) {
    member = this.liste.getMemberById(member.id)
    
    this.router.navigate(["members/" + member.id])
  }
  
}
