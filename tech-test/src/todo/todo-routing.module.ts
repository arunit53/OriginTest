import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoBaseComponent } from './containers/todo-base/todo-base.component';
import { TodoNewComponent } from './containers/todo-new/todo-new.component';
import { TodoUpdateTaskComponent } from './containers/todo-update-task/todo-update-task.component';


const todoRoutes: Routes = [
  { path: "new", component: TodoNewComponent },
  { path: "task/:id", component: TodoUpdateTaskComponent },
  { path: ":old/:new", component: TodoBaseComponent },
  { 
    path: '', 
    component: TodoBaseComponent,
  },

   
    ];


@NgModule({
  imports: [RouterModule.forChild(todoRoutes )],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
