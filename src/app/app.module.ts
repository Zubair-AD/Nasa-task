import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs'
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'

import { FormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DateComponent } from './date/date.component';






const materialModules = [
  MatButtonModule,
  MatIconModule
];

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    DateComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   BrowserAnimationsModule, MatTabsModule,MatButtonModule, MatToolbarModule ,MatIconModule 
  ,FormsModule, MatDatepickerModule, MatNativeDateModule,MatFormFieldModule ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
