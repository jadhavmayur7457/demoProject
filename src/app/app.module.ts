import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorComponent } from './rxjs/operator/operator.component';
import { TemplateComponent } from './form/template/template.component';
import {HttpClientModule}   from '@angular/common/http';
import { ApiFailureComponent } from './rxjs/api-failure/api-failure.component';
import { MapComponent } from './rxjs/map/map.component';
import { CombinelatestComponent } from './rxjs/combinelatest/combinelatest.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponent } from './form/reactive/reactive.component';
import { StudentidComponent } from './crudoperation/studentid/studentid.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorComponent,
    TemplateComponent,
    ApiFailureComponent,
    MapComponent,
    CombinelatestComponent,
    ReactiveComponent,
    StudentidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
