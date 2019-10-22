import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  declarations: [HeaderComponent, HeaderMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
