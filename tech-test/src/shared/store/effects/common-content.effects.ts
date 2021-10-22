import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
CommonContentTypes,
CommonContentRequested,
CommonContentResponse,
CommonContentError
} from '../actions';

import { of } from "rxjs";
import {catchError , filter, map, mergeMap, withLatestFrom, tap} from 'rxjs/operators';
import { CommonApiClient} from '../../service/common-api-client.service';
import { AppState } from '../../store/reducers';
import { Store } from "@ngrx/store";
import { commonContentSelector } from "../selectors";

@Injectable()
export class CommonContentEffects {
    loadCommonContent$ = createEffect(() =>
    this.actions$.pipe(
        ofType<CommonContentRequested>(CommonContentTypes.CommonContentRequested),
        withLatestFrom(this.store.select(commonContentSelector)),
        filter(([action,dynamicContent])=> !dynamicContent),
        mergeMap(() =>
        this.commonService.getCommonContent().pipe(
            map(content => new CommonContentResponse({content})),
            catchError(error => of(new CommonContentError(error)))
        ))

    )
    )

    constructor(
        private actions$: Actions,
        private commonService: CommonApiClient,
        private store: Store<AppState>
    )
    {}

}