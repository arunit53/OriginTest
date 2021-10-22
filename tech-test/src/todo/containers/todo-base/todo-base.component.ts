import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TodoSandbox } from "src/todo/sandbox/todo.sandbox.service";
import { TodoService } from "src/todo/service/todo.service";
import { AddItemEventArgs } from "../../components/todo-add-item/todo-add-item.component";
import * as _ from 'lodash';
import { from } from "rxjs";
import { filter } from "rxjs/operators";

@Component({
  selector: 'app-todo-base',
  templateUrl: './todo-base.component.html',
  styleUrls: ['./todo-base.component.sass']
})
export class TodoBaseComponent implements OnInit {
  items: AddItemEventArgs[];
  alert: string;

  constructor(private todoSandbox: TodoSandbox, private data: TodoService, private route: ActivatedRoute) { 
    this.alert ='';
    this.items =[];
  }

  ngOnInit(): void {
    this.getAllTasks();
    this.onUpdateItem(
      this.route.snapshot.paramMap.get('old'),
      this.route.snapshot.paramMap.get('new')
    );
  }

  getAllTasks() {
    this.todoSandbox.getTaskList$.subscribe(allTasks => {
      this.items = allTasks;
    })
  }

  onAddItem(eventArgs: AddItemEventArgs) {
    const tempList = _.cloneDeep(this.items);
    tempList.push(eventArgs);
    this.items = tempList
    this.todoSandbox.updateListItem(this.items);
    this.todoSandbox.addNewTodoItem(eventArgs);
  }

  onUpdateItem(oldValue: any, newValue: any) {
    if (oldValue != null && oldValue !== newValue) {
      this.alert = oldValue + " is updated to " + newValue + " sucessfully...";
    } else if (oldValue != null && oldValue === newValue) {
      this.alert = oldValue + " is not updated...";
    }
  }

  onItemMessage(mgs:string) {
    this.alert = mgs;
  }

  onFilterItem(filterValue:string) {
    const allListItems = from(this.items);
    let tempArray:any=[];
    if(filterValue !== '') {
      const filteredItems = allListItems.pipe(filter((eachItem) => eachItem.label.toLowerCase().includes(filterValue)));
      filteredItems.forEach((eachItem)=> {
        tempArray.push(eachItem);
      })
      this.items = tempArray;
    } else {
      this.getAllTasks()
    }

  }

}




