import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [HomeComponent, AboutUsComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
