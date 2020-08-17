import { Injectable } from '@angular/core';
import {Member} from './../models/member.model'

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  //Déclaration de la liste des objets Membre
  public memberList: Member[] = [];

  constructor() {
    //requete HTTP pour obtenir la liste à jour
   }

   //Ajouter un membre à la liste
  addMember(member: Member){
    this.memberList.push(member);
  } 

};
