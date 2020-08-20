import { Injectable } from '@angular/core';
import { Member } from './../models/member.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jsonbin } from './../../../environments/jsonbin';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberListService {

  //Déclaration de la liste des objets Membre
  public memberList: Member[] = [];

  constructor(private http: HttpClient)  {
    //requete HTTP pour obtenir la liste à jour
  }

  /**
   * Ajouter un membre à la liste
   */
  public addMember(member: Member):Observable<any>  {
    this.memberList.push(member)
    return this.put();
  }

  /**
    * Retourner la liste de Member
    */
   public getMember(): Observable<Member[]> {
    return this.http.get<Member[]>(jsonbin.bins.members, {
      headers: new HttpHeaders(jsonbin.headers)
    }).pipe(tap(memberList => this.memberList = memberList));
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
  public deleteMember(member: Member): Observable<any> {
    this.memberList.splice(this.memberList.indexOf(member), 1);
    return this.put();
  }

  public put(): Observable<any> {
    return this.http.put(jsonbin.bins.members, this.memberList, {
      headers: new HttpHeaders(jsonbin.headers)
    });
  }
  public get(): Observable<Member[]> {
    return this.http.get<Member[]>(jsonbin.bins.members, {
      headers: new HttpHeaders(jsonbin.headers)
    }).pipe(tap(memberList => this.memberList = memberList));
  }
};
