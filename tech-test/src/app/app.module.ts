import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonApiClient } from 'src/shared/service/common-api-client.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, UrlSerializer } from '@angular/router';
import { AppComponent } from './app.component';
import {AppSandbox} from './app.sanbbox'
import { CommonContentEffects } from 'src/shared/store/effects';
import { DefaultRouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers, metaReducers } from 'src/shared/store/reducers';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers,{metaReducers}),
    EffectsModule.forRoot([CommonContentEffects]),
    StoreRouterConnectingModule.forRoot({serializer:DefaultRouterStateSerializer, stateKey:'router'}),
    RouterModule
  ],
  providers: [
    AppSandbox,
    CommonApiClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
