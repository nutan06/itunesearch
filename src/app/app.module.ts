import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component, Injectable } from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    JsonpModule,
    OrderModule    
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
