import { ActionReducerMap,  createFeatureSelector, } from "@ngrx/store";
import * as fromTodoReducer from './todo.reducers';

export interface AppState {}
export interface TodoState {
    todoData: fromTodoReducer.TodoState;
}

export const reducers: ActionReducerMap<AppState> = {
    todoData : fromTodoReducer.reducer
}

export const selecTodoState = createFeatureSelector<TodoState>('todo');