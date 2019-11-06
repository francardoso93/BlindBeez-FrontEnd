import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [FooterComponent, SocialMediaComponent],
  imports: [
    CommonModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
