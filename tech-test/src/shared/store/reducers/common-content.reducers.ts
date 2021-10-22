import { CommonContentTypes, CommonContentActions } from "../actions";
import {updateObject} from '../../helpers/utils';
import { InitialState } from "@ngrx/store/src/models";

export interface CommonContentState {
    commonContentLoaded: boolean;
    commonContent:any;
}

export const initialContentState: CommonContentState = {
    commonContent: {},
    commonContentLoaded:false
}

export function reducer(
    state = initialContentState,
    action: CommonContentActions
): CommonContentState {
    switch(action.type) {
        case CommonContentTypes.CommonContentResponse : {
            return updateObject(state,{
                commonContent: action.payload.content,
                commonContentLoaded: true
            })
        }
        case CommonContentTypes.CommonContentError : {
            return updateObject(state,{
                commonContent: action.payload.errror,
                commonContentLoaded: true
            })
        }
        default : {
            return state;
        }
    }
}
