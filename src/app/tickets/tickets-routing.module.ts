import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { TicketUpdateComponent } from './ticket-update/ticket-update.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {
    path: "tickets",
    component: TicketsComponent,
    children: [
      {
        path: "create",
        component: TicketCreateComponent
      },
      {
        path: "",
        component: TicketListComponent
      },
      {
        path: ":id/update",
        component: TicketUpdateComponent
      },
      {
        path: ":id",
        component: TicketComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
