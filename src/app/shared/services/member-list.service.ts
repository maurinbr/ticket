import { Injectable } from '@angular/core';
import { Member } from './../models/member.model'

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  //Déclaration de la liste des objets Membre
  public memberList: Member[] = [];

  constructor() {
    //requete HTTP pour obtenir la liste à jour
  }

  /**
   * Ajouter un membre à la liste
   */
  public addMember(member: Member) {
    return this.memberList.push(member);
  }

  /**
    * Retourner la liste de Member
    */
  public getMember(): Member[] {
    return this.memberList;
  }

  /**
    * Retourner le Member correspondant à l'Id
    */
  public getMemberById(id: number): Member | null {
    return this.memberList.find(member => id === member.id)

  }

  /**
    * Supprimer le Member
    */
  public deleteMember(member: Member): Member {
    this.memberList.splice(this.memberList.indexOf(member), 1);
    return member
  }
};
