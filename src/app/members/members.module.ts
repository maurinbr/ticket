import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberComponent } from './member/member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberCreateComponent } from './member-create/member-create.component';
import { MemberUpdateComponent } from './member-update/member-update.component';
import { MembersComponent } from './members.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MemberComponent,
    MemberListComponent,
    MemberCreateComponent,
    MemberUpdateComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    SharedModule
  ],
})
export class MembersModule { }
