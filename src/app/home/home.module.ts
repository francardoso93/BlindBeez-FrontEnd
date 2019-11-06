import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PartnersComponent } from './partners/partners.component';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [HomeComponent, AboutUsComponent, ContactFormComponent, PartnersComponent, BannerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
