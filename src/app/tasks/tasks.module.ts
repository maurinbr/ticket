import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksComponent } from './tasks.component';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskComponent } from './task/task.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    TaskCreateComponent,
    TaskListComponent,
    TaskUpdateComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
