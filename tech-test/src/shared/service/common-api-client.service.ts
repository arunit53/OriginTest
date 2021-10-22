import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CommonApiClient {
    constructor(private httpClient: HttpClient) {}

    public getCommonContent() {
        const api_url = '';
        return this.httpClient.get(api_url);
    }
}