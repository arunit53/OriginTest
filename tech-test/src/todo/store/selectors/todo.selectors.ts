import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../shared/store/reducers';
import { selecTodoState } from "../reducers";

export const getTaskListSelector = createSelector(
    selecTodoState,
    todoState => todoState.todoData.allTaskItems
);