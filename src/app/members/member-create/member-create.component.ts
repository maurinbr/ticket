import { Component, OnInit } from '@angular/core';
import { Member } from './../../shared/models/member.model'
import { MemberListService } from './../../shared/services/member-list.service'
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.scss']
})
export class MemberCreateComponent implements OnInit {

  /*Déclarer un objet de type Membre*/
  public member: Member = new Member;


  public roles:String[]

  /*Déclarer le formulaire*/
  public memberForm: FormGroup;

  //Instancier la liste des membres et le routing
  constructor(private formB: FormBuilder,
    private liste: MemberListService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    /* Liste des roles */
    this.roles = ['client','user']

    /* Instancier le formulaire */
    this.memberForm = this.formB.group({
      lastName: ['LastName',
        [Validators.required, Validators.minLength(3)]],
      firstName: ['FirstName',
        [Validators.required, Validators.minLength(3)]],
      role: ['', Validators.required],
    }, {
      updateOn: "submit"
    })
  }

  /* Validation du formulaire */
  onSubmit() {
    if (this.memberForm.valid) {
      this.member.id = this.liste.memberList.length + 1
      this.member.lastName = this.memberForm.value['lastName']
      this.member.firstName = this.memberForm.value['firstName']
      this.member.role = this.memberForm.value['role']

      /*ajouter le Membre à la liste*/
      this.liste.addMember(this.member)



      /*rediriger vers la liste avec le service router*/
      this.router.navigate(["members"])

    }
  }


}
