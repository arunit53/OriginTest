import { Action } from '@ngrx/store';

export enum CommonContentTypes  {
    CommonContentRequested = '[CommonContentRequested] CommonContentRequested ',
    CommonContentResponse = '[CommonContentResponse] CommonContentResponse ',
    CommonContentError = '[CommonContentError] CommonContentError ',
}

export class CommonContentRequested implements Action {
    readonly type = CommonContentTypes.CommonContentRequested;
}

export class CommonContentResponse implements Action {
    readonly type = CommonContentTypes.CommonContentResponse;
    constructor(public payload:{content:any}) {}
}

export class CommonContentError implements Action {
    readonly type = CommonContentTypes.CommonContentError;
    constructor(public payload:{errror:any}) {}
}

export type CommonContentActions =
| CommonContentRequested
| CommonContentResponse
| CommonContentError;


