import { Store } from "@ngrx/store";
import { AppState } from '../store/reducers';

export abstract class Sandbox {
   constructor(protected store$: Store<AppState>) {
    }

}