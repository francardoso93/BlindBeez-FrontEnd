import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterTestingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
