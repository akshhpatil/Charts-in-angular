import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ChartsModule  } from "ng2-charts";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './home/home.component';
import { BarchartComponent } from './barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    HomeComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
