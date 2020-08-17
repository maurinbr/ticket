import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './members.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberComponent } from './member/member.component';


const routes: Routes = [
  {
    path: "members",
    component: MembersComponent,
    children: [
      {
        path: "create",
        component: MemberCreateComponent
      },
      {
        path: "",
        component: MemberListComponent
      },
      {
        path: ":id/update",
        component: MemberUpdateComponent
      },
      {
        path: ":id",
        component: MemberComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
