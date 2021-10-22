import { Component, OnInit } from '@angular/core';
import { TodoService } from "src/todo/service/todo.service";
import { AddItemEventArgs } from "../../components/todo-add-item/todo-add-item.component";
import { ActivatedRoute, Router } from "@angular/router";
import { TodoSandbox } from 'src/todo/sandbox/todo.sandbox.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-todo-update-task',
  templateUrl: './todo-update-task.component.html',
  styleUrls: ['./todo-update-task.component.sass']
})
export class TodoUpdateTaskComponent implements OnInit {
  itemId!: any;
  tasks!: AddItemEventArgs[];
  itemName!: string;
  oldItemName!: string;
  todo!: any;
  index!: number;

  constructor(private todoSandbox: TodoSandbox,
    private route: ActivatedRoute,
    private router: Router,
    private data: TodoService) { 
      /*
      this.itemId ='';
      this.tasks =[];
      this.itemName = '';
      this.oldItemName='';
      this.index = -1;
      this.todo ={
        id:0,
        name:'',
        done:false
      }
      */
    }

  ngOnInit(): void {
    
    this.itemId = this.route.snapshot.paramMap.get("id");
     this.getAllTasks();
  }

  getAllTasks() {
    this.todoSandbox.getTaskList$.subscribe(allTasks => {
      this.tasks = allTasks;
      this.todo = this.tasks.find(t => t.id.toString() === this.itemId);
      this.itemName = this.todo.label;
      this.oldItemName = this.todo.label;
    })
  }

  onUpdate() {
    const tempList = _.cloneDeep(this.tasks);
    if(tempList !== undefined && tempList.length >0) {
      tempList.forEach((item:any) => {
            if(item.id === this.todo.id) {
                item.label = this.itemName;
            }
        });
    }
    this.index = this.tasks.indexOf(this.todo);
    this.tasks = tempList;
    this.todoSandbox.updateListItem(this.tasks);
    this.todoSandbox.updateTodoItem(this.todo)
    this.router.navigate(["todo", this.oldItemName, this.todo.label]);
  }

}


