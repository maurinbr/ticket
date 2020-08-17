import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: "tasks",
    component: TasksComponent,
    children: [
      {
        path: "create",
        component: TaskCreateComponent
      },
      {
        path: "",
        component: TaskListComponent
      },
      {
        path: ":id/update",
        component: TaskUpdateComponent
      },
      {
        path: ":id",
        component: TaskComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
