import { TodoTypes, TodoActions } from "../actions";
import {updateObject, updateListTaskItem } from '../../shared/helpers/utils';
import { InitialState } from "@ngrx/store/src/models";

export interface TodoState {
    allTaskItems:any;
    allTaskItemsLoaded:boolean;
}

export const initialTodoState: TodoState = {
    allTaskItems: [],    
    allTaskItemsLoaded:false
}

export function reducer(
    state = initialTodoState,
    action: TodoActions
): TodoState {
    switch(action.type) {
        
        case TodoTypes.GetTaskItemsResponse : {
            return updateObject(state,{
                allTaskItems: action.payload.content,
                allTaskItemsLoaded: true
            })
        }
        case TodoTypes.GetTaskItemsError : {
            return updateObject(state,{
                allTaskItems: action.payload.errror,
                allTaskItemsLoaded: true
            })
        }
        case TodoTypes.UpdateEachTaskItem : {
            return updateObject(state,{
                allTaskItems: action.payload.allList,
            })
        }
        default : {
            return state;
        }
    }
}
