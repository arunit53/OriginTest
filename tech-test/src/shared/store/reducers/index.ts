import { ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReducer from '../reducers/common-content.reducers';
import {storeFreeze} from 'ngrx-store-freeze';


export interface AppState {}
export const metaReducers: MetaReducer<AppState>[] = false ? [storeFreeze] :[]

export interface State {
    commonContent: fromReducer.CommonContentState
}

export const reducers: ActionReducerMap<AppState> = {
    commonContent: fromReducer.reducer
}

export const getCommonContentState = createFeatureSelector<fromReducer.CommonContentState>('commonContent');