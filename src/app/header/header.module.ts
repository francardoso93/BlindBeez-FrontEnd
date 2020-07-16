import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { HeaderService } from './header.service';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [HeaderService],
  exports: [
    HeaderComponent,
    HeaderService
  ]
})
export class HeaderModule { }
