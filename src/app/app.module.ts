import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule
  ],
  declarations: [
    AppComponent,
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
