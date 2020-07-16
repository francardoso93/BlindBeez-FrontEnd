import { Component, OnInit, OnChanges } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  buttonsVisible = true;
  constructor(private readonly headerService: HeaderService) {     
  }

  ngOnInit() {
    console.log('init')
    this.buttonsVisible = this.headerService.getHeaderButtonsVisibility();
  }

  ngOnChanges(){
    this.buttonsVisible = this.headerService.getHeaderButtonsVisibility();
  }
}
