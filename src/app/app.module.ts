import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';
//import {AvengerAppComponent, DialogContent} from './app.component';
import {AvengerAppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),

  ],
  declarations: [AvengerAppComponent],
  entryComponents: [],
  bootstrap: [AvengerAppComponent],
})
export class MaterialAppModule { }
