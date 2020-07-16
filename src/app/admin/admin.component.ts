import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private readonly headerService: HeaderService) {
    this.headerService.setHeaderButtonsVisibility(false);
   }

  ngOnInit() {
  }

}
