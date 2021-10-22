import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {select, Store} from "@ngrx/store";
import { AppState } from "src/shared/store/reducers";
import {
    GetTaskItemsRequest,
    UpdateEachTaskItem,
    AddNewTodoItem,
    DeleteTodoItem,
    UpdateTodoItem,
    getTaskListSelector 
} from '../store'

@Injectable()

export  class TodoSandbox {
    constructor(protected store$:Store<AppState>,private router:Router) {
        this.store$.dispatch(new GetTaskItemsRequest())
    }
    public getTaskList$ = this.store$.pipe(select(getTaskListSelector));

    updateListItem(allList:any) {
        this.store$.dispatch(new UpdateEachTaskItem({allList:allList}))
    }

    addNewTodoItem(newItem:any) {
        this.store$.dispatch(new AddNewTodoItem({newItem:newItem}))
    }

    deleteTodoItem(deleteItem:any) {
        this.store$.dispatch(new DeleteTodoItem({deleteItem:deleteItem}))
    }

    updateTodoItem(updateItem:any) {
        this.store$.dispatch(new UpdateTodoItem({updateItem:updateItem}))
    }
}