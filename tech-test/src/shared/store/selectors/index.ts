import { createSelector } from "@ngrx/store";
import * as fromRoot from '../../../shared/store/reducers';


export const commonContentSelector = createSelector(
    fromRoot.getCommonContentState,
    commomContentState => commomContentState.commonContent
);