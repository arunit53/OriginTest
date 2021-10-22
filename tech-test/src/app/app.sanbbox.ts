import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Sandbox } from "src/shared/sandbox/base.sandbox";
import { AppState } from "src/shared/store/reducers";


@Injectable()
export class AppSandbox extends Sandbox {
    constructor(protected store$: Store<AppState>){
        super(store$)
    }
}