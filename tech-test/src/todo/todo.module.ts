import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { TodoRoutingModule } from './todo-routing.module';
import { TodoBaseComponent } from './containers/todo-base/todo-base.component';
import { TodoAddItemComponent } from './components/todo-add-item/todo-add-item.component';
import { TodoService } from './service/todo.service';
import { TodoMessageComponent } from './components/todo-message/todo-message.component';
import { TodoTasksComponent } from './containers/todo-tasks/todo-tasks.component';
import { TodoUpdateTaskComponent } from './containers/todo-update-task/todo-update-task.component';
import { TodoNewComponent } from './containers/todo-new/todo-new.component';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodoSandbox } from './sandbox/todo.sandbox.service';
import { reducers, effects } from './store';

@NgModule({
  declarations: [
    TodoBaseComponent,
    TodoAddItemComponent,
    TodoMessageComponent,
    TodoTasksComponent,
    TodoUpdateTaskComponent,
    TodoNewComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    StoreModule.forFeature('todo',reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [TodoService, TodoSandbox],
})
export class TodoModule { }
