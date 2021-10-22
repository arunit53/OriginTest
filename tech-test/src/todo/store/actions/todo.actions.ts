import { Action } from '@ngrx/store';

export enum TodoTypes  {
    GetTaskItemsRequest = '[GetTaskItemsRequest] GetTaskItemsRequest ',
    GetTaskItemsResponse = '[GetTaskItemsResponse] GetTaskItemsResponse ',
    GetTaskItemsError = '[GetTaskItemsError] GetTaskItemsError ',
    UpdateEachTaskItem = '[UpdateEachTaskItem] UpdateEachTaskItem',
    AddNewTodoItem = '[AddNewTodoItem] AddNewTodoItem',
    DeleteTodoItem = '[DeleteTodoItem] DeleteTodoItem',
    UpdateTodoItem = '[UpdateTodoItem] UpdateTodoItem',
    AddNewTodoItemResponse = '[AddNewTodoItemResponse] AddNewTodoItemResponse',
    AddNewTodoItemFailure = '[AddNewTodoItemFailure] AddNewTodoItemFailure',
}

export class GetTaskItemsRequest implements Action {
    readonly type = TodoTypes.GetTaskItemsRequest;
    constructor() {}
}

export class GetTaskItemsResponse implements Action {
    readonly type = TodoTypes.GetTaskItemsResponse;
    constructor(public payload:{content:any}) {}
}

export class GetTaskItemsError implements Action {
    readonly type = TodoTypes.GetTaskItemsError;
    constructor(public payload:{errror:any}) {}
}

export class UpdateEachTaskItem implements Action {
    readonly type = TodoTypes.UpdateEachTaskItem;
    constructor(public payload:{allList:any}) {}
}

export class AddNewTodoItem implements Action {
    readonly type = TodoTypes.AddNewTodoItem;
    constructor(public payload:{newItem:any}) {}
}

export class AddNewTodoItemResponse implements Action {
    readonly type = TodoTypes.AddNewTodoItemResponse;
    constructor(public payload:{response:any}) {}
}

export class AddNewTodoItemFailure implements Action {
    readonly type = TodoTypes.AddNewTodoItemFailure;
    constructor(public payload:{errror:any}) {}
}

export class DeleteTodoItem implements Action {
    readonly type = TodoTypes.DeleteTodoItem;
    constructor(public payload:{deleteItem:any}) {}
}

export class UpdateTodoItem implements Action {
    readonly type = TodoTypes.UpdateTodoItem;
    constructor(public payload:{updateItem:any}) {}
}

export type TodoActions =
| GetTaskItemsRequest
| GetTaskItemsResponse
| GetTaskItemsError
| UpdateEachTaskItem
| AddNewTodoItem
| DeleteTodoItem
| UpdateTodoItem
| AddNewTodoItemFailure
| AddNewTodoItemResponse;


