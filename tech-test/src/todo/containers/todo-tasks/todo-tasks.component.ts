import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TodoSandbox } from "src/todo/sandbox/todo.sandbox.service";
import { TodoService } from "src/todo/service/todo.service";
import { AddItemEventArgs } from "../../components/todo-add-item/todo-add-item.component";
import * as _ from 'lodash';

@Component({
  selector: 'app-todo-tasks',
  templateUrl: './todo-tasks.component.html',
  styleUrls: ['./todo-tasks.component.sass']
})
export class TodoTasksComponent implements OnInit {

  @Input("tasks") tasks!: AddItemEventArgs[];
  @Output("deleteItemMessage") deleteItemMessage = new EventEmitter();
  @Output("itemStatusChangeMessage")
  itemStatusChangeMessage = new EventEmitter();
  todo!: AddItemEventArgs;
  index!:any;

  constructor(private todoSandbox: TodoSandbox) { 

  }

  ngOnInit(): void {
  }

  onStatuChange(task:any) {
    this.todo = task;
    const tempList = _.cloneDeep(this.tasks);
    if(tempList !== undefined && tempList.length >0) {
      tempList.forEach((item:any) => {
            if(item.id === task.id) {
                item.done = !item.done;
            }
        });
    }
    this.tasks = tempList;
    let msg = this.todo.done
      ? this.todo.label + " task is not completed yet..."
      : this.todo.label + " task is completed successfully...";
    this.itemStatusChangeMessage.emit(msg);
    this.todoSandbox.updateListItem(this.tasks);
    
  }

  onDelete(task:any) {
    const deleteId=task.id;
    console.log('****deleteId', deleteId);
    this.index = this.tasks.indexOf(task);
    const tempList = _.cloneDeep(this.tasks);
    tempList.splice(this.index,1)
    this.tasks = tempList;
    this.todoSandbox.updateListItem(this.tasks);
    this.todoSandbox.deleteTodoItem(deleteId);
    this.deleteItemMessage.emit(task.name + " is deleted successfully...");
  }

}
