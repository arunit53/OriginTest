import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
    TodoTypes,
    GetTaskItemsRequest,
    GetTaskItemsResponse,
    GetTaskItemsError,
    AddNewTodoItem,
    AddNewTodoItemFailure,
    AddNewTodoItemResponse,
    DeleteTodoItem,
    UpdateTodoItem

} from '../actions';

import { of } from "rxjs";
import {catchError , filter, map, mergeMap, withLatestFrom, tap} from 'rxjs/operators';
import { TodoService} from '../../service/todo.service';
import { AppState } from '../../../shared/store/reducers';
import { Store } from "@ngrx/store";
import { getTaskListSelector } from "../selectors";

@Injectable()
export class TodoEffects {
    loadTaskList$ = createEffect(() => 
    this.actions$.pipe(
        ofType<GetTaskItemsRequest>(TodoTypes.GetTaskItemsRequest),
        mergeMap(() => 
        this.todoService.getTaskList().pipe(
            map(data => new GetTaskItemsResponse({content:data})),
            catchError(error => of(new GetTaskItemsError(error)))
        ))
    ));

    addNewTaskItem$ = createEffect(() => 
    this.actions$.pipe(
        ofType<AddNewTodoItem>(TodoTypes.AddNewTodoItem),
        mergeMap((action) => 
        this.todoService.addNewItem(action.payload.newItem).pipe(
            map(data => new AddNewTodoItemResponse({response:data})),
            catchError(error => of(new AddNewTodoItemFailure(error)))
        ))
    ));

    deleteTaskItem$ = createEffect(() => 
    this.actions$.pipe(
        ofType<DeleteTodoItem>(TodoTypes.DeleteTodoItem),
        mergeMap((action) => 
        this.todoService.deleteTodoItem(action.payload.deleteItem).pipe(
            map(data => new AddNewTodoItemResponse({response:data})),
            catchError(error => of(new AddNewTodoItemFailure(error)))
        ))
    ));

    updateTaskItem$ = createEffect(() => 
    this.actions$.pipe(
        ofType<UpdateTodoItem>(TodoTypes.UpdateTodoItem),
        mergeMap((action) => 
        this.todoService.updateTodoItem(action.payload.updateItem).pipe(
            map(data => new AddNewTodoItemResponse({response:data})),
            catchError(error => of(new AddNewTodoItemFailure(error)))
        ))
    ));

    
    constructor(
        private actions$: Actions,
        private todoService: TodoService,
        private store: Store<AppState>
    )
    {}

}