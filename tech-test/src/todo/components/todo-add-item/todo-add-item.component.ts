import { Component, OnInit,  Output, EventEmitter, } from '@angular/core';

export interface AddItemEventArgs {
  id: number;
  label: string;
  description:string;
  category:string;
  done: boolean;
  
  
}

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.sass']
})
export class TodoAddItemComponent implements OnInit {
  item: AddItemEventArgs;
  filterItem:any;
  constructor() { 
    this.item ={
      id:0,
      label:'',
      description:'',
      category:'',
      done:false
    }
  }

  ngOnInit(): void {
  }
 
  @Output("addItem") addItem = new EventEmitter();
  @Output("addItemMessage") addItemMessage = new EventEmitter();
  @Output("filterTaskItem") filterTaskItem = new EventEmitter();
  onAddItem(itemvalue:any) {
    if (itemvalue.value !== "") {
      this.item = { id: Date.now(), label: itemvalue.value, description:'New task', category:'General', done: false };
      this.addItem.emit(this.item);
      this.addItemMessage.emit(itemvalue.value + " is added successfully...");
      itemvalue.value = "";
    }
  }

  doFliter(itemValue:any) {
      this.filterTaskItem.emit(itemValue);
  }
}







